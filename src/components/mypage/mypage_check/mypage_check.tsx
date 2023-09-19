import React, { useRef, useState, useEffect } from 'react';
import useImageUploader from '../../../hook/imgfiler';
import { apiInstance } from '../../../utils/api';
import FullCalendar from '@fullcalendar/react';


interface Challenge {
    mainImg: string;
    title: string;
    start_date: string;
    end_date: string;
    id: string;
  }
  
const  MypageCheck  = () =>{
  const [checkInfo, setCheckInfo] = useState({
    name: '',
    grade: '',
  });

  useEffect(() => {
    // API를 통해 유저 정보 가져오기
    apiInstance
      .get('/users/mypageInfo')
      .then((response) => {
        const userData = response.data;
        setCheckInfo({
          name: userData.name,
          grade: userData.grade,
        });
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
   <>
    <div className='checkwrap'>
     <div className='infowrap'>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
     </div>
    </div>
   </>
  );
};

export default  MypageCheck ;
