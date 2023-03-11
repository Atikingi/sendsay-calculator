import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import NumberButton from '../../UI/NumberButton';

import { useAppDispatch } from '../../store/store';
import { setValue } from '../../store/slices/calculatorSlice';

import * as S from './style';

const values = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ','];

const NumberBlock = () => {
  const dispatch = useAppDispatch();

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setValue((e.target as HTMLButtonElement).value));
  };

  return (
    <S.Container id="numbers">
      {values.map((value) => (
        <NumberButton
          key={uuidv4()}
          value={value}
          onClick={onClickHandler}
          isZero={value === '0'}
        />
      ))}
    </S.Container>
  );
};

export default NumberBlock;
