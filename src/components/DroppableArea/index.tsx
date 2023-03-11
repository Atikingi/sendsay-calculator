import { v4 as uuidv4 } from 'uuid';

import DropAreaIcon from '../../UI/Icons/DropAreaIcon';
import Screen from '../Screen';
import OperationBlock from '../OperationBlock';
import NumberBlock from '../NumberBlock';
import ResultButton from '../../UI/ResultButton';
import SortLine from '../../UI/SortLine';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getDraggableElementId, getMode } from '../../store/selectors/dndSelector';
import { useAppDispatch } from '../../store/store';
import { addActiveElementId, deleteElementId, dragStart } from '../../store/slices/dndSlice';

import { sortArray } from '../../helpers/sortArray';

import * as S from './style';

const elements: Record<string, React.ReactElement> = {
  screen: <Screen isConstructorBlock={false} />,
  operations: <OperationBlock />,
  numbers: <NumberBlock />,
  result: <ResultButton />
};

const DroppableArea = () => {
  const dispatch = useAppDispatch();

  const draggableElementId = useSelector(getDraggableElementId);
  const isRuntime = useSelector(getMode);

  const [onDragEnter, setOnDragEnter] = useState<boolean>(false);
  const [currentElements, setCurrentElements] = useState<string[]>([]);
  const [showDropArea, setShowDropArea] = useState<boolean>(true);
  const [showSortLine, setShowSortLine] = useState<string>('');

  useEffect(() => {
    if (currentElements.length) {
      setShowDropArea(false);
    } else {
      setShowDropArea(true);
    }
  }, [currentElements]);

  const onDragEnterHandler = (e: React.DragEvent) => {
    e.preventDefault();

    setOnDragEnter(true);
  };

  const onDragLeaveHandler = (e: React.DragEvent) => {
    e.preventDefault();

    setOnDragEnter(false);
  };

  const onDropEventHandler = (e: React.DragEvent) => {
    e.preventDefault();

    if (currentElements.includes(draggableElementId)) {
      setShowSortLine('');
      return;
    }

    const id = e.dataTransfer.getData('text');

    if (id === 'screen') {
      setCurrentElements(sortArray(currentElements, draggableElementId, 'numbers'));
    } else {
      setCurrentElements(currentElements.concat(id));
    }

    setOnDragEnter(false);
    dispatch(addActiveElementId(id));
  };

  const onDragOverHandler = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const onDragEnterItemEventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const targetId = (e.target as HTMLDivElement).id;

    if (!targetId) return;

    setShowSortLine(targetId);
  };

  const onDragEndItemHandler = (e: React.DragEvent<HTMLDivElement>) => {
    dispatch(dragStart((e.target as HTMLDivElement).id));
  };

  const onDragLeaveItemEventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setShowSortLine('');
  };

  const onDropItemEventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const targetId = (e.target as HTMLDivElement).id;

    setCurrentElements(sortArray(currentElements, draggableElementId, targetId));
    setShowSortLine('');
    dispatch(addActiveElementId(draggableElementId));
  };

  const deleteItemHandler = (id: string) => {
    if (isRuntime) return;

    dispatch(deleteElementId(id));
    setCurrentElements((prevState) => prevState.filter((currentId) => currentId !== id));
  };

  return (
    <S.Container
      onDragEnter={onDragEnterHandler}
      onDragLeave={onDragLeaveHandler}
      itemInArea={onDragEnter}
      showDropArea={showDropArea}
      onDrop={onDropEventHandler}
      onDragOver={onDragOverHandler}
    >
      {currentElements.map((id) => (
        <S.Wrapper key={uuidv4()} onDoubleClick={() => deleteItemHandler(id)}>
          <S.DragBlock
            id={id}
            draggable={id !== 'screen'}
            onDragEnter={onDragEnterItemEventHandler}
            onDragLeave={onDragLeaveItemEventHandler}
            onDrop={onDropItemEventHandler}
            onDragOver={(e) => e.preventDefault()}
            onMouseDown={onDragEndItemHandler}
            isShow={!isRuntime}
          />
          {elements[id]}
          <SortLine visible={id === showSortLine} />
        </S.Wrapper>
      ))}
      <S.DropTextWrapper showDropArea={showDropArea}>
        <S.IconWrapper>
          <DropAreaIcon />
        </S.IconWrapper>
        <S.Title>
          Перетащите сюда
          <S.Text>любой элемент из левой панели</S.Text>
        </S.Title>
      </S.DropTextWrapper>
    </S.Container>
  );
};

export default DroppableArea;
