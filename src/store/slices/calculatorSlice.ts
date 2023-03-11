import { createSlice } from '@reduxjs/toolkit';

type Props = {
  value: string;
  operator: string;
  savingNumber: number | null;
};

const initialState: Props = {
  value: '',
  operator: '',
  savingNumber: null
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setValue: (state, action) => {
      if (state.value.length === 15) return;
      if (state.value === 'Не определено') state.value = '0';

      state.value = state.value + action.payload;
    },
    setOperator: (state, action) => {
      if (state.savingNumber && state.value === '') {
        state.operator = action.payload;
        state.value = '';
        return;
      }

      state.operator = action.payload;

      state.savingNumber = parseFloat(state.value.replace(',', '.'));
      state.value = '';
    },
    setResult: (state) => {
      const number2 = parseFloat(state.value.replace(',', '.'));

      if (state.operator === '+' && state.savingNumber) {
        const result = state.savingNumber + number2;
        String(result).length > 14
          ? (state.value = result.toFixed(12).replace('.', ','))
          : (state.value = String(result).replace('.', ','));
      }

      if (state.operator === '-' && state.savingNumber) {
        state.value = String(state.savingNumber - number2).replace('.', ',');
      }

      if (state.operator === '/' && state.savingNumber) {
        if (state.value === '0') {
          state.value = 'Не определено';
          return;
        }

        const result = state.savingNumber / number2;

        String(result).length > 14
          ? (state.value = result.toFixed(12).replace('.', ','))
          : (state.value = String(result).replace('.', ','));
      }

      if (state.operator === 'x' && state.savingNumber) {
        const result = state.savingNumber * number2;

        String(result).length > 14
          ? (state.value = result.toFixed(12).replace('.', ','))
          : (state.value = String(result).replace('.', ','));
      }
    },
    clearData: (state) => {
      state.operator = '';
      state.savingNumber = null;
      state.value = '';
    }
  }
});

export const { setValue, setOperator, setResult, clearData } = calculatorSlice.actions;
