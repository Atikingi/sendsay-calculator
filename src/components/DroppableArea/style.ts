import styled from 'styled-components';
import { color } from '../../styles/colors';

export const Container = styled.div<{ itemInArea: boolean; showDropArea: boolean }>`
  width: 243px;
  padding-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.showDropArea ? 'center' : 'flex-start')};
  align-items: center;
  gap: 24px;
  border: ${(props) => (props.showDropArea ? '2px dashed #c4c4c4' : '0')};
  border-radius: 6px;
  background-color: ${(props) =>
    props.itemInArea && props.showDropArea ? color.bgDropArea : color.bgPrimary};
`;

export const DropTextWrapper = styled.div<{ showDropArea: boolean }>`
  display: ${(props) => (props.showDropArea ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled.div`
  margin-bottom: 12px;
`;

export const Title = styled.p`
  max-width: 127px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${color.indigo};
`;

export const Text = styled.span`
  display: inline-block;
  max-width: 100px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: ${color.textGray};
`;

export const DragBlock = styled.div<{ isShow: boolean }>`
  position: absolute;
  display: ${(props) => (props.isShow ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  opacity: 1;
  cursor: move;
  user-select: none;

  &[draggable='false'] {
    cursor: no-drop;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  max-width: 240px;
  display: flex;
  flex-direction: column;
  background: ${color.bgPrimary};
`;
