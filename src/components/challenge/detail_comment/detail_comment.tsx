import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './detail_comment.style';
import { ImStarFull } from 'react-icons/im';
import { apiInstance } from '../../../utils/api';

interface Review {
  id: string;
  content: string;
  star: number;
  create_date: string;
  user: string;
  name: string;
}

const Comment = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showAllReviews, setShowAllReviews] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await apiInstance.get(`/review/${id}`);
        if (response.status === 200) {
          const fetchedReviews: Review[] = response.data.map(
            (challenge: any) => ({
              ...challenge.review,
              create_date: new Date(
                challenge.review.create_date
              ).toLocaleDateString(),
              name: challenge.name,
            })
          );
          setReviews(fetchedReviews);
        }
      } catch (error) {
        console.error('리뷰 가져오기 오류', error);
      }
    }

    // 리뷰를 가져오는 함수 호출
    fetchReviews();
  }, [id]);

  // 리뷰의 총 개수 계산
  const totalReviews = reviews.length;

  // 리뷰의 총 별점 계산
  const totalStar = reviews.reduce((acc, review) => acc + review.star, 0);

  // 평균 별점 계산
  const averageStar =
    totalReviews > 0 ? (totalStar / totalReviews).toFixed(1) : '0.0';

  return (
    <S.CommentWrap>
      <S.CommentTitle>
        <h3>
          총 <span>{totalReviews}</span>개
        </h3>
        <h4>{averageStar}</h4>
        {Array.from({ length: 5 }).map((_, idx) => (
          <ImStarFull
            key={idx}
            size={20}
            className={
              idx < Math.floor(Number(averageStar)) ? 'yellowStar' : ''
            }
          />
        ))}
      </S.CommentTitle>
      {reviews.slice(0, showAllReviews ? undefined : 3).map((review, index) => (
        <S.CommentContent key={index}>
          <S.CommentFlex>
            <h3>{review.name}</h3>
            <h4>{review.create_date}</h4>
            <div>
              {Array.from({ length: review.star }).map((_, idx) => (
                <ImStarFull key={idx} size={50} className="yellowStar" />
              ))}
              {Array.from({ length: 5 - review.star }).map((_, idx) => (
                <ImStarFull key={idx} size={50} />
              ))}
            </div>
          </S.CommentFlex>
          <p>{review.content}</p>
        </S.CommentContent>
      ))}
      {totalReviews > 3 && (
        <S.ShowClose onClick={() => setShowAllReviews(!showAllReviews)}>
          {showAllReviews ? '접기' : '더보기+'}
        </S.ShowClose>
      )}
    </S.CommentWrap>
  );
};

export default Comment;
