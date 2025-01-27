import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Users {
  id: number;
  token: string;
  typeUser: string;
}

// Estado inicial con un array de permisos
const initialState: Users = {
  id: 0,
  token: " ",
  typeUser: "",
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
      state.typeUser = action.payload.typeUser;
    },
  },
});

export const { assign: assignUsers } = UsersSlice.actions;
export default UsersSlice.reducer;
