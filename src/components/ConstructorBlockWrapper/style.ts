import styled from 'styled-components';
import { color } from '../../styles/colors';

export const Wrapper = styled.div<{ isActive: boolean }>`
  position: relative;
  max-width: 240px;
  display: flex;
  padding: 4px;
  background: ${color.bgPrimary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06), 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  opacity: ${(props) => (props.isActive ? '0.5' : '1')};
  user-select: none;
`;
