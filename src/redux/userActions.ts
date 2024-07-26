import axios from 'axios';
import { AppDispatch } from './store';
import {
  fetchUsersStart,
  fetchUsersSuccess,
  fetchUsersFailure,
  addUser,
  updateUser,
  deleteUser,
  User,
} from './userReducer';

const API_URL = 'https://ca076967c0fd722840e8.free.beeceptor.com/api'

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  dispatch(fetchUsersStart());
  try {
    const response = await axios.get(`${API_URL}/users`);
    dispatch(fetchUsersSuccess(response.data));
  } catch (error) {
    dispatch(fetchUsersFailure(error.message));
  }
};

export const createUser = (user: User) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.post(`${API_URL}/users`, user);
    dispatch(addUser(response.data));
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

export const updateUserAction = (user: User) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.put(`${API_URL}/users/${user.id}`, user);
    dispatch(updateUser(response.data));
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

export const deleteUserAction = (userId: number) => async (dispatch: AppDispatch) => {
  try {
    await axios.delete(`${API_URL}/users/${userId}`);
    dispatch(deleteUser(userId));
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};
export { deleteUser };
    export type { User };

