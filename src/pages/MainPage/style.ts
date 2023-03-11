import styled from 'styled-components';
import { color } from '../../styles/colors';

export const Container = styled.section`
  width: 695px;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: ${color.bgPrimary};
`;

export const HeaderBlock = styled.div`
  width: 100%;
  margin-bottom: 34px;
  display: flex;
  justify-content: flex-end;
  background: ${color.bgPrimary};
`;

export const MainBlock = styled(HeaderBlock)`
  gap: 56px;
  height: 460px;
`;
