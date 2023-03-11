import React from 'react';

import * as S from './style';

type Props = {
  value: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const OperationButton = ({ value, onClick }: Props) => {
  return <S.Button onClick={onClick}>{value}</S.Button>;
};

export default OperationButton;
