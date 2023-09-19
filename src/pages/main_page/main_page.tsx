import React, { useEffect } from 'react';
import * as S from './main_page.style';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import SlideBnner from '../../components/common/slide/slide';
import Wrapper from '../../components/common/wrapper/wrapper';
import { ROUTE } from '../../routes';
import { Link } from 'react-router-dom';
import MainSlide from '../../hook/Slide/Users_slide';
import OngoingSlide from '../../hook/Slide/Ongoing_slide';
import NewSlide from '../../hook/Slide/New_slide';
import SearchPage from '../../components/search_page/search_page';
import channelService from '../../channelService';
export interface ChallengeBoxProps {
  selectedCategory: string;
  handleCategoryClick: (category: string) => void;
  challenges: [];
}

const MainPage = () => {
  useEffect(() => {
    channelService.loadScript();
  }, []);

  // 2. 부팅
  useEffect(() => {
    channelService.boot({
      pluginKey: 'bbe1fcfa-411a-4ac0-b3be-a0df4b992f35', // 여기에 적절한 플러그인 키를 입력하세요.
    });
  }, []);

  return (
    <S.BackWhite>
      <Header />
      <SlideBnner />
      <Wrapper>
        <S.ContentsList>
          <S.ProgressList>
            <li>
              <h2>🗓️ 진행중인 챌린지</h2>
            </li>

            <li>
              <Link to={ROUTE.LISTPAGE.link}>
                <h3>전체보기</h3>
              </Link>
            </li>
          </S.ProgressList>
          <S.ContentsWrap>
            <OngoingSlide />
          </S.ContentsWrap>
        </S.ContentsList>
        <S.PopularList>
          <S.ProgressList>
            <li>
              <h2>
                <S.PopularListSpan>🔥HOT!</S.PopularListSpan> 인기 챌린지
              </h2>
            </li>
            <li>
              <Link to={ROUTE.LISTPAGE.link}>
                <h3>전체보기</h3>
              </Link>
            </li>
          </S.ProgressList>
          <S.ContentsWrap>
            <MainSlide />
          </S.ContentsWrap>
        </S.PopularList>
        <S.NewList>
          <S.ProgressList>
            <li>
              <h2>
                <S.NewListSpan>⭐️NEW!</S.NewListSpan> 신규 챌린지
              </h2>
            </li>
            <li>
              <Link to={ROUTE.LISTPAGE.link}>
                <h3>전체보기</h3>
              </Link>
            </li>
          </S.ProgressList>
          <S.ContentsWrap>
            <NewSlide />
          </S.ContentsWrap>
        </S.NewList>
      </Wrapper>
      <Footer />
    </S.BackWhite>
  );
};

export default MainPage;
