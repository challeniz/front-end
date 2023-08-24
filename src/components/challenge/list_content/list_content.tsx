// list_content.tsx
import React, { useState, useEffect } from 'react';
import * as S from './list_content.style';
import { BsCalendarRange } from 'react-icons/bs';
import { apiInstance } from '../../../utils/api';
import { ROUTE } from '../../../routes';
import { Link } from 'react-router-dom';

// 예시로 Challenge 타입을 정의
interface Challenge {
  like: boolean;
  title: string;
  start_date: string;
  end_date: string;
  tag: string[];
  id: string;
  category: string;
}

const menuArr = [
  { name: '전체', content: '전체', category: '' },
  { name: '건강', content: '건강', category: '건강' },
  { name: '취미', content: '취미', category: '취미' },
  { name: '식습관', content: '식습관', category: '식습관' },
  { name: '공부', content: '공부', category: '공부' },
  { name: '환경', content: '환경', category: '환경' },
];

const ListContent = () => {
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get('/challenges/');
        const data = response.data;

        if (data.length > 0) {
          const challenges = data.map((challenge: any) => ({
            like: false,
            title: challenge.title,
            start_date: new Date(challenge.start_date).toLocaleDateString(),
            end_date: new Date(challenge.end_date).toLocaleDateString(),
            tag: challenge.tag,
            id: challenge._id,
            category: challenge.category,
          }));
          setChallengeList(challenges);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // 초기 로딩 시 데이터 가져오기
    fetchData();
  }, []);

  const toggleLike = (index: number) => {
    setChallengeList((prevList) => {
      const updatedList = [...prevList];
      updatedList[index].like = !updatedList[index].like;
      return updatedList;
    });
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredChallengeList = selectedCategory
    ? challengeList.filter(
        (challenge) => challenge.category === selectedCategory
      )
    : challengeList;

  return (
    <S.ListWrap>
      <S.TabMenu>
        {menuArr.map((menu, index) => (
          <li
            key={index}
            className={
              selectedCategory === menu.category ? 'submenu focused' : 'submenu'
            }
            onClick={() => handleCategoryClick(menu.category)}
          >
            {menu.name}
          </li>
        ))}
      </S.TabMenu>
      <S.ContentsWrap>
        {filteredChallengeList.map((challenge, index) => (
          <S.ContentWrap key={index}>
            <S.ImgStyled>
              <img src="" alt={`Challenge`} />
              <S.StyledHeartButton
                like={challenge.like}
                onClick={() => toggleLike(index)}
              />
            </S.ImgStyled>
            <S.TabWrap>
              {challenge.tag.map((tag, index) => (
                <S.TabStyled key={index}>{tag}</S.TabStyled>
              ))}
            </S.TabWrap>
            <Link to={`${ROUTE.DETAILPAGE.link}/${challenge.id}`}>
              <S.H3Styled>{challenge.title}</S.H3Styled>
            </Link>
            <S.H4Styled>
              <BsCalendarRange />
              {challenge.start_date} ~ {challenge.end_date}
            </S.H4Styled>
          </S.ContentWrap>
        ))}
      </S.ContentsWrap>
    </S.ListWrap>
  );
};

export default ListContent;
