import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getValue } from '../../store/selectors/calculatorSelector';

import * as S from './style';

type Props = {
  isConstructorBlock: boolean;
};

const Screen = ({ isConstructorBlock }: Props) => {
  const value = useSelector(getValue);

  const [fontSize, setFontSize] = useState<string>('36px');
  const [align, setAlign] = useState<string>('36px');

  useEffect(() => {
    if (value.length < 8) {
      setFontSize('36px');
      setAlign('center');
    } else {
      setFontSize('19px');
      setAlign('flex-end');
    }
  }, [value]);

  return (
    <S.Container align={align}>
      <S.Screen
        type="text"
        disabled={true}
        maxLength={15}
        id="screen"
        value={isConstructorBlock ? '0' : value || '0'}
        fontSize={fontSize}
      />
    </S.Container>
  );
};

export default Screen;
