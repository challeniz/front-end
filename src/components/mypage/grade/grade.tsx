import React, { useEffect, useState } from 'react';
import * as S from './grade.style';
import { apiInstance } from '../../../utils/api';

interface Grade {
  grade: string;
  verifiCount: number;
}

const Grade = () => {
  const [grade, setGrade] = useState<Grade | null>(null);

  useEffect(() => {
    async function fetchGrade() {
      try {
        const token = localStorage.getItem('token');
        const response = await apiInstance.get('/badges');
        if (token) {
          if (response.status === 200) {
            const user = response.data.user;
            const grade = user.grade;
            const verifiCount = user.verifiCount;
            const userGrade = { grade, verifiCount };
            setGrade(userGrade);
          }
        }
      } catch (error) {
        console.error('배지 정보 가져오기 오류', error);
      }
    }

    fetchGrade();
  }, []);

  return (
    <S.GradeTitle>
      <h3>회원 등급</h3>
      <S.GradeWrap>
        <div>
          <S.Img src="https://i.ibb.co/7YPZNmF/plant.png" alt="plant" />
          <p className="grade1">신입 챌리니</p>
        </div>
        <div>
          <S.Img src="https://i.ibb.co/VNC6X36/tulip.png" alt="tulip" />
          <p className="grade2">주니어 챌리니</p>
        </div>
        <div>
          <S.Img src="https://i.ibb.co/12341cf/tree.png" alt="tree" />
          <p className="grade3">시니어 챌리니</p>
        </div>
        <div>
          <S.Img src="https://i.ibb.co/sgVd8kz/forest.png" alt="forest" />
          <p className="grade4">전문 챌리니</p>
        </div>
      </S.GradeWrap>
      <S.GradeInfo>
        <div className="gradeBox grade1">
          <p>
            <span>챌린지 인증</span>
            <br /> 14개 이하
          </p>
        </div>
        <div className="gradeBox grade2">
          <p>
            <span>챌린지 인증</span>
            <br /> 15개 이상 29개 이하
          </p>
        </div>
        <div className="gradeBox grade3">
          <p>
            <span>챌린지 인증</span>
            <br /> 30개 이상 49개 이하
          </p>
        </div>
        <div className="gradeBox grade4">
          <p>
            <span>챌린지 인증</span>
            <br /> 50개 이상
          </p>
        </div>
      </S.GradeInfo>
      <h3 className="title-top">내 등급</h3>
      <S.MyGrade>
        <div>
          <h5>내 등급</h5>
          <p>{grade?.grade}</p>
        </div>
        <div>
          <h5>챌린지 인증</h5>
          <p>{grade?.verifiCount}개</p>
        </div>
        <div>
          <h5>다음 등급까지 남은 인증</h5>
          {grade ? (
            grade.verifiCount <= 14 ? (
              <p>{14 - grade.verifiCount}개</p>
            ) : grade.verifiCount < 30 ? (
              <p>{29 - grade.verifiCount}개</p>
            ) : grade.verifiCount < 50 ? (
              <p>{49 - grade.verifiCount}개</p>
            ) : (
              <p>{grade.verifiCount}개</p>
            )
          ) : (
            <p>등급 정보를 불러올 수 없습니다.</p>
          )}
        </div>
      </S.MyGrade>
    </S.GradeTitle>
  );
};

export default Grade;
