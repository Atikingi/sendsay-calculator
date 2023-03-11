import * as S from './style';

type Props = {
  visible: boolean;
};

const SortLine = ({ visible }: Props) => {
  return (
    <S.Container isShow={visible}>
      <S.Rhombus />
      <S.Line />
      <S.Rhombus />
    </S.Container>
  );
};

export default SortLine;
