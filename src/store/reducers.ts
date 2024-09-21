import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define la estructura del filtro con propiedades dinámicas
interface Filter {
  [key: string]: string; // El filtro puede tener propiedades dinámicas con valores de tipo string
}

// Estado inicial con un array de filtros
const initialState = {
  filters: [] as Filter[], // Array de objetos de filtros
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    // Acción para agregar o actualizar un filtro
    asingn: (state, action: PayloadAction<Filter>) => {
      const newFilter = action.payload;

      const key = Object.keys(newFilter)[0];
      const existingPropIndex = state.filters.findIndex((item) => key in item);

      if (existingPropIndex >= 0) {
        // Actualiza el filtro existente
        state.filters[existingPropIndex] = newFilter;
      } else {
        // Añade el nuevo filtro
        state.filters.push(newFilter);
      }
    },

    // Acción para eliminar un filtro específico basado en su valor
    delete: (state, action: PayloadAction<Filter>) => {
      const filterToRemove = action.payload;
      const filterKeys = Object.keys(filterToRemove);

      state.filters = state.filters.filter(
        (filter) =>
          !filterKeys.every((key) => filter[key] === filterToRemove[key])
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
