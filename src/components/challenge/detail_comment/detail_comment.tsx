import { useState } from 'react';
import * as S from './detail_comment.style';
import { ImStarFull } from 'react-icons/im';

const Comment = () => {
  const [clicked, setClicked] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleStarClick = (index: number) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  return (
    <S.CommentWrap>
      <S.CommentTitle>
        <h3>
          전체 <span>10</span>건
        </h3>
        <div>
          {clicked.map((isClicked, idx) => (
            <ImStarFull
              key={idx}
              size={50}
              onClick={() => handleStarClick(idx)}
              className={isClicked ? 'yellowStar' : ''}
            />
          ))}
        </div>
      </S.CommentTitle>
      <S.CommentContent>
        <S.CommentFlex>
          <h3>닉***</h3>
          <h4>2023.09.14</h4>
          <div>
            {clicked.map((isClicked, idx) => (
              <ImStarFull
                key={idx}
                size={50}
                onClick={() => handleStarClick(idx)}
                className={isClicked ? 'yellowStar' : ''}
              />
            ))}
          </div>
        </S.CommentFlex>
        <p>
          안녕하세요! 정말 들을땐 쉬운듯 해보면 어렵고~ 듣고 또 듣고 여러번
          반복해 들었더니 이제야 좀 감이 잡히네요! 코치님들이 퀵 가이드를 진짜
          쉽게 삼키기만 하면 소화할수 있게 쉽게 만들어 주셔서 저같은 곰손도 감히
          용기내여 도전해 봅니다.이 나이에 MKYU덕분에 이처럼 간단하게 디지털화
          스마트인 행렬에 들수 있어서 진짜진짜 행운이라고 생각합니다.좀 늦더라도
          차근차근 세팅하고 끊임없이 좋은 콘텐츠 개발해서 열심히 지속 발전
          하겠습니다.앞으로 잘 부탁 드립니다.
        </p>
      </S.CommentContent>
      <S.CommentContent>
        <S.CommentFlex>
          <h3>닉***</h3>
          <h4>2023.09.14</h4>
          <div>
            {clicked.map((isClicked, idx) => (
              <ImStarFull
                key={idx}
                size={50}
                onClick={() => handleStarClick(idx)}
                className={isClicked ? 'yellowStar' : ''}
              />
            ))}
          </div>
        </S.CommentFlex>
        <p>
          안녕하세요! 정말 들을땐 쉬운듯 해보면 어렵고~ 듣고 또 듣고 여러번
          반복해 들었더니 이제야 좀 감이 잡히네요! 코치님들이 퀵 가이드를 진짜
          쉽게 삼키기만 하면 소화할수 있게 쉽게 만들어 주셔서 저같은 곰손도 감히
          용기내여 도전해 봅니다.이 나이에 MKYU덕분에 이처럼 간단하게 디지털화
          스마트인 행렬에 들수 있어서 진짜진짜 행운이라고 생각합니다.좀 늦더라도
          차근차근 세팅하고 끊임없이 좋은 콘텐츠 개발해서 열심히 지속 발전
          하겠습니다.앞으로 잘 부탁 드립니다.
        </p>
      </S.CommentContent>
      <S.CommentContent>
        <S.CommentFlex>
          <h3>닉***</h3>
          <h4>2023.09.14</h4>
          <div>
            {clicked.map((isClicked, idx) => (
              <ImStarFull
                key={idx}
                size={50}
                onClick={() => handleStarClick(idx)}
                className={isClicked ? 'yellowStar' : ''}
              />
            ))}
          </div>
        </S.CommentFlex>
        <p>
          안녕하세요! 정말 들을땐 쉬운듯 해보면 어렵고~ 듣고 또 듣고 여러번
          반복해 들었더니 이제야 좀 감이 잡히네요! 코치님들이 퀵 가이드를 진짜
          쉽게 삼키기만 하면 소화할수 있게 쉽게 만들어 주셔서 저같은 곰손도 감히
          용기내여 도전해 봅니다.이 나이에 MKYU덕분에 이처럼 간단하게 디지털화
          스마트인 행렬에 들수 있어서 진짜진짜 행운이라고 생각합니다.좀 늦더라도
          차근차근 세팅하고 끊임없이 좋은 콘텐츠 개발해서 열심히 지속 발전
          하겠습니다.앞으로 잘 부탁 드립니다.
        </p>
      </S.CommentContent>
      <S.CommentContent>
        <S.CommentFlex>
          <h3>닉***</h3>
          <h4>2023.09.14</h4>
          <div>
            {clicked.map((isClicked, idx) => (
              <ImStarFull
                key={idx}
                size={50}
                onClick={() => handleStarClick(idx)}
                className={isClicked ? 'yellowStar' : ''}
              />
            ))}
          </div>
        </S.CommentFlex>
        <p>
          안녕하세요! 정말 들을땐 쉬운듯 해보면 어렵고~ 듣고 또 듣고 여러번
          반복해 들었더니 이제야 좀 감이 잡히네요! 코치님들이 퀵 가이드를 진짜
          쉽게 삼키기만 하면 소화할수 있게 쉽게 만들어 주셔서 저같은 곰손도 감히
          용기내여 도전해 봅니다.이 나이에 MKYU덕분에 이처럼 간단하게 디지털화
          스마트인 행렬에 들수 있어서 진짜진짜 행운이라고 생각합니다.좀 늦더라도
          차근차근 세팅하고 끊임없이 좋은 콘텐츠 개발해서 열심히 지속 발전
          하겠습니다.앞으로 잘 부탁 드립니다.
        </p>
      </S.CommentContent>
      <S.CommentContent>
        <S.CommentFlex>
          <h3>닉***</h3>
          <h4>2023.09.14</h4>
          <div>
            {clicked.map((isClicked, idx) => (
              <ImStarFull
                key={idx}
                size={50}
                onClick={() => handleStarClick(idx)}
                className={isClicked ? 'yellowStar' : ''}
              />
            ))}
          </div>
        </S.CommentFlex>
        <p>
          안녕하세요! 정말 들을땐 쉬운듯 해보면 어렵고~ 듣고 또 듣고 여러번
          반복해 들었더니 이제야 좀 감이 잡히네요! 코치님들이 퀵 가이드를 진짜
          쉽게 삼키기만 하면 소화할수 있게 쉽게 만들어 주셔서 저같은 곰손도 감히
          용기내여 도전해 봅니다.이 나이에 MKYU덕분에 이처럼 간단하게 디지털화
          스마트인 행렬에 들수 있어서 진짜진짜 행운이라고 생각합니다.좀 늦더라도
          차근차근 세팅하고 끊임없이 좋은 콘텐츠 개발해서 열심히 지속 발전
          하겠습니다.앞으로 잘 부탁 드립니다.
        </p>
      </S.CommentContent>
    </S.CommentWrap>
  );
};

export default Comment;
