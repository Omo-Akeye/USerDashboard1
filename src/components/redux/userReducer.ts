import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  _id?: any;
  name: string;
  email: string;
  role: string;
}

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUsersStart(state) {
      state.loading = true;
    },
    fetchUsersSuccess(state, action: PayloadAction<User[]>) {
      state.loading = false;
      state.users = action.payload;
    },
    fetchUsersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
    updateUser(state, action: PayloadAction<User>) {
      const index = state.users.findIndex(user => user._id === action.payload._id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser(state, action: PayloadAction<string>) {
      state.users = state.users.filter(user => user._id !== action.payload);
    },
  },
});

export const {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  addUser,
  updateUser,
  deleteUser,
} = userSlice.actions;

export default userSlice.reducer;
