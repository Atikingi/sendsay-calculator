import { createSlice } from '@reduxjs/toolkit';

type Props = {
  draggableElementId: string;
  activeElementsIds: string[];
  isRuntime: boolean;
};

const initialState: Props = {
  draggableElementId: '',
  activeElementsIds: [],
  isRuntime: false
};

export const dndSlice = createSlice({
  name: 'dnd',
  initialState,
  reducers: {
    dragStart: (state, action) => {
      state.draggableElementId = action.payload;
    },
    addActiveElementId: (state, action) => {
      state.activeElementsIds.push(action.payload);
    },
    deleteElementId: (state, action) => {
      state.activeElementsIds = state.activeElementsIds.filter((id) => id !== action.payload);
    },
    toggleMode: (state, action) => {
      state.isRuntime = action.payload === 'runtime';
    }
  }
});

export const { dragStart, addActiveElementId, deleteElementId, toggleMode } = dndSlice.actions;
