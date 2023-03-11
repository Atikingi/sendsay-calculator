import React, { useState } from 'react';

import RuntimeIcon from '../../UI/Icons/RuntimeIcon';
import ConstructorIcon from '../../UI/Icons/ConstructorIcon';

import { useAppDispatch } from '../../store/store';

import { toggleMode } from '../../store/slices/dndSlice';
import { clearData } from '../../store/slices/calculatorSlice';

import * as S from './style';

const ModeBlock = () => {
  const dispatch = useAppDispatch();

  const [selectedMode, setSelectedMode] = useState<string>('constructor');

  const onSelectModeHandler = (modeName: string) => {
    setSelectedMode(modeName);
    dispatch(toggleMode(modeName));
    dispatch(clearData());
  };

  const onRadioChangeHandler = (e: React.ChangeEvent) => {
    dispatch(toggleMode((e.target as HTMLInputElement).value));
  };

  return (
    <S.Container>
      <S.RuntimeWrapper
        isActive={selectedMode === 'runtime'}
        onClick={() => onSelectModeHandler('runtime')}
      >
        <S.InputMode
          type="radio"
          name="mode"
          id="modeRuntime"
          value="runtime"
          checked={selectedMode === 'runtime'}
          onChange={onRadioChangeHandler}
        />
        <S.IconWrapper isActive={selectedMode === 'runtime'}>
          <RuntimeIcon />
        </S.IconWrapper>
        <S.LabelMode htmlFor="modeRuntime">Runtime</S.LabelMode>
      </S.RuntimeWrapper>
      <S.Wrapper
        isActive={selectedMode === 'constructor'}
        onClick={() => onSelectModeHandler('constructor')}
      >
        <S.InputMode
          type="radio"
          name="mode"
          id="modeConstructor"
          value="constructor"
          checked={selectedMode === 'constructor'}
          onChange={onRadioChangeHandler}
        />
        <S.IconWrapper isActive={selectedMode === 'constructor'}>
          <ConstructorIcon />
        </S.IconWrapper>
        <S.LabelMode htmlFor="modeConstructor">Constructor</S.LabelMode>
      </S.Wrapper>
    </S.Container>
  );
};

export default ModeBlock;
