import { RootState } from '../store';

export const getDraggableElementId = (state: RootState) => state.dnd.draggableElementId;
export const getActiveElementsIds = (state: RootState) => state.dnd.activeElementsIds;
export const getMode = (state: RootState) => state.dnd.isRuntime;
