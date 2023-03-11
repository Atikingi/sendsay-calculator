import styled from 'styled-components';
import { color } from '../../styles/colors';

export const Button = styled.button<{ isZero: boolean | undefined }>`
  width: ${(props) => (props.isZero ? '152px' : '72px')};
  height: 48px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.blackPrimary};
  background: ${color.bgPrimary};
  border: 1px solid #e2e3e5;
  border-radius: 6px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;

  &:nth-child(3n + 3),
  &:last-child {
    margin-right: 0;
  }

  &:hover {
    border: 2px solid ${color.indigo};
    cursor: pointer;
  }

  &:active {
    background-color: ${color.indigo};
    color: ${color.whitePrimary};
  }
`;
