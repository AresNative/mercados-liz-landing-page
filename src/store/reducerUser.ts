import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Users {
  id: number;
  token: string;
  permisos: any;
}

// Estado inicial con un array de permisos
const initialState: Users = {
  id: 0,
  token: "",
  permisos: [],
};

const UsersSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    // Acción para asignar los datos del usuario
    assign: (state, action: PayloadAction<Users>) => {
      console.log(action.payload);

      state.id = action.payload.id;
      state.token = action.payload.token;
      state.permisos = action.payload.permisos;
    },
  },
});

export const { assign: assignUsers } = UsersSlice.actions;
export default UsersSlice.reducer;
