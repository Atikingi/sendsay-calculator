import styled from 'styled-components';
import { color } from '../../styles/colors';

export const Button = styled.button`
  width: 232px;
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${color.whitePrimary};
  background: ${color.indigo};
  border-radius: 6px;
  border: 0;
  font-family: 'Inter', sans-serif;
  font-weight: 500;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: ${color.whitePrimary};
    color: ${color.blackPrimary};
    border: 2px solid ${color.indigo};
  }
`;
