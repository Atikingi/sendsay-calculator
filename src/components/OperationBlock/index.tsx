import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import OperationButton from '../../UI/OperationButton';

import { useAppDispatch } from '../../store/store';
import { setOperator } from '../../store/slices/calculatorSlice';

import * as S from './style';

const values = ['/', 'x', '-', '+'];

const OperationBlock = () => {
  const dispatch = useAppDispatch();

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>, value: string) => {
    dispatch(setOperator(value));
  };

  return (
    <S.Container id="operations">
      {values.map((value) => (
        <OperationButton key={uuidv4()} value={value} onClick={(e) => onClickHandler(e, value)} />
      ))}
    </S.Container>
  );
};

export default OperationBlock;
