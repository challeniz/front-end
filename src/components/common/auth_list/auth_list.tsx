import React, { useState } from 'react';
import * as S from './auth_list.style';
import ModalBasic from '../modal/modal';

interface AuthListProps {}

const AuthList: React.FC<AuthListProps> = () => {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <S.AuthWrap>
        <S.AuthGrid>
          <S.ImgWrap onClick={showModal}></S.ImgWrap>
          {modalOpen && <ModalBasic setModalOpen={setModalOpen} />}
        </S.AuthGrid>
      </S.AuthWrap>
    </>
  );
};

export default AuthList;
