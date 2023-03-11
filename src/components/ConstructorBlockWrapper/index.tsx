import React from 'react';
import * as S from './style';

type Props = {
  children: React.ReactNode;
  isActive: boolean;
};

const ConstructorBlockWrapper = ({ children, isActive }: Props) => {
  return <S.Wrapper isActive={isActive}>{children}</S.Wrapper>;
};

export default ConstructorBlockWrapper;
