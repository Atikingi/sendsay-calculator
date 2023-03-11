import styled from 'styled-components';
import { color } from '../../styles/colors';

export const Container = styled.div<{ isShow: boolean }>`
  position: absolute;
  bottom: -10px;
  right: -6px;
  display: ${(props) => (props.isShow ? 'flex' : 'none')};
  align-items: center;
  gap: 0;
`;

export const Rhombus = styled.div`
  width: 4px;
  height: 4px;
  background-color: ${color.indigo};
  transform: rotate(45deg);
`;

export const Line = styled.div`
  width: 235px;
  height: 1px;
  background-color: ${color.indigo};
`;
