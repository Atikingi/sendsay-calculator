import ModeBlock from '../../components/ModeBlock';
import ConstructorBlock from '../../components/ConstructorBlock';
import DroppableArea from '../../components/DroppableArea';

import * as S from './style';

const MainPage = () => {
  return (
    <S.Container>
      <S.HeaderBlock>
        <ModeBlock />
      </S.HeaderBlock>
      <S.MainBlock>
        <ConstructorBlock />
        <DroppableArea />
      </S.MainBlock>
    </S.Container>
  );
};

export default MainPage;
