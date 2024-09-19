import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define la estructura del filtro con un id único
interface Filter {
  id: string; // Identificador único para cada filtro
  [key: string]: string; // Otros pares clave-valor
}

// Estado inicial con un array de filtros
const initialState = {
  filters: [] as Filter[], // Array de objetos de filtros
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    // Acción para agregar un filtro
    asingn: (state, action: PayloadAction<Filter>) => {
      state.filters.push(action.payload);
    },

    // Acción para eliminar un filtro específico basado en su id
    delete: (state, action: PayloadAction<string>) => {
      state.filters = state.filters.filter(
        (filter) => filter.id !== action.payload
      );
    },

    // Acción para eliminar todos los filtros
    clearAll: (state) => {
      state.filters = [];
    },
  },
});

export const { asingn, delete: deleteFilter, clearAll } = filterSlice.actions;
export default filterSlice.reducer;
