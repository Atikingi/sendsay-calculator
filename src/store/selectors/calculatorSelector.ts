import { RootState } from '../store';

export const getValue = (state: RootState) => state.calculator.value;
