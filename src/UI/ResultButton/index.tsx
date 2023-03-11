import { useAppDispatch } from '../../store/store';
import { setResult } from '../../store/slices/calculatorSlice';

import * as S from './style';

const ResultButton = () => {
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    dispatch(setResult());
  };

  return (
    <S.Button id="result" onClick={onClickHandler}>
      {'='}
    </S.Button>
  );
};

export default ResultButton;
