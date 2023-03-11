import styled from 'styled-components';
import { color } from '../../styles/colors';

export const Container = styled.div<{ align: string }>`
  width: 232px;
  height: 52px;
  padding-right: 2px;
  padding-bottom: 4px;
  padding-left: 12px;
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: flex-end;
  border-radius: 6px;
  background-color: ${color.bgSecondary};
  overflow: hidden;
`;

export const Screen = styled.input<{ fontSize: string }>`
  width: 100%;
  text-align: right;
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: ${(props) => props.fontSize};
  border: 0;
  color: ${color.blackPrimary};
  outline: none;
`;
