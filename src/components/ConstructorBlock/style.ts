import styled from 'styled-components';

export const Container = styled.div<{ isShow: boolean }>`
  position: relative;
  max-width: 240px;
  display: ${(props) => (props.isShow ? 'flex' : 'none')};
  flex-direction: column;
  gap: 16px;
`;

export const DragBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
  cursor: move;

  &[draggable='false'] {
    cursor: no-drop;
  }
`;
