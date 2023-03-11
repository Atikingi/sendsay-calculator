import React from 'react';

import NumberBlock from '../NumberBlock';
import ConstructorBlockWrapper from '../ConstructorBlockWrapper';
import Screen from '../Screen';
import OperationBlock from '../OperationBlock';
import ResultButton from '../../UI/ResultButton';

import { useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';

import { dragStart } from '../../store/slices/dndSlice';
import { getActiveElementsIds, getMode } from '../../store/selectors/dndSelector';

import * as S from './style';

const ConstructorBlock = () => {
  const dispatch = useAppDispatch();

  const activeElementsIds = useSelector(getActiveElementsIds);
  const isRuntime = useSelector(getMode);

  const onDragStartHandler = (e: React.DragEvent) => {
    dispatch(dragStart((e.target as HTMLDivElement).id));
    e.dataTransfer.setData('text', (e.target as HTMLDivElement).id);
    e.dataTransfer.effectAllowed = 'copy';
  };

  const onDragEndEventHandler = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <S.Container isShow={!isRuntime}>
      <ConstructorBlockWrapper isActive={activeElementsIds.includes('screen') || isRuntime}>
        <S.DragBlock
          draggable={!activeElementsIds.includes('screen') && !isRuntime}
          onDragStart={onDragStartHandler}
          id="screen"
          onDragEnd={onDragEndEventHandler}
        />
        <Screen isConstructorBlock={true} />
      </ConstructorBlockWrapper>
      <ConstructorBlockWrapper isActive={activeElementsIds.includes('operations') || isRuntime}>
        <S.DragBlock
          draggable={!activeElementsIds.includes('operations') && !isRuntime}
          onDragStart={onDragStartHandler}
          id="operations"
          onDragEnd={onDragEndEventHandler}
        />
        <OperationBlock />
      </ConstructorBlockWrapper>
      <ConstructorBlockWrapper isActive={activeElementsIds.includes('numbers') || isRuntime}>
        <S.DragBlock
          draggable={!activeElementsIds.includes('numbers') && !isRuntime}
          onDragStart={onDragStartHandler}
          id="numbers"
          onDragEnd={onDragEndEventHandler}
        />
        <NumberBlock />
      </ConstructorBlockWrapper>
      <ConstructorBlockWrapper isActive={activeElementsIds.includes('result') || isRuntime}>
        <S.DragBlock
          draggable={!activeElementsIds.includes('result') && !isRuntime}
          onDragStart={onDragStartHandler}
          id="result"
          onDragEnd={onDragEndEventHandler}
        />
        <ResultButton />
      </ConstructorBlockWrapper>
    </S.Container>
  );
};

export default ConstructorBlock;
