import styled from 'styled-components';
import { color } from '../../styles/colors';

export const Container = styled.label`
  position: relative;
  width: 243px;
  padding: 1px;
  display: flex;
  background-color: ${color.bgSecondary};
  border-radius: 5px;
`;

export const Wrapper = styled.div<{ isActive: boolean }>`
  width: 133px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background-color: ${(props) => (props.isActive ? color.bgPrimary : color.bgSecondary)};
  border: 1px solid ${(props) => (props.isActive ? '#e2e3e5' : color.bgSecondary)};
  border-radius: 5px;
  transition: background-color 0.2s ease-in;
  cursor: pointer;
`;

export const RuntimeWrapper = styled(Wrapper)`
  width: 108px;
`;

export const IconWrapper = styled.div<{ isActive: boolean }>`
  height: 20px;
  color: ${(props) => (props.isActive ? color.indigo : color.modeGray)};
  cursor: pointer;
`;

export const LabelMode = styled.label`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;
  color: ${color.modeGray};
  cursor: pointer;
`;

export const InputMode = styled.input`
  display: none;
`;
