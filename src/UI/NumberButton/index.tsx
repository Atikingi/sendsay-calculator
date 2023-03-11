import React from 'react';

import * as S from './style';

type Props = {
  value: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isZero?: boolean;
};

const NumberButton = ({ value, onClick, isZero }: Props) => {
  return (
    <S.Button onClick={onClick} isZero={isZero} value={value}>
      {value}
    </S.Button>
  );
};

export default NumberButton;
