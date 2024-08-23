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

const API_URL = 'https://user-backend-3fh9.onrender.com/users';

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  dispatch(fetchUsersStart());
  try {
    const response = await axios.get(API_URL);
    dispatch(fetchUsersSuccess(response.data));
  } catch (error) {
    console.error('Error fetching users:', error); 
    dispatch(fetchUsersFailure('error' || 'Unknown error'));
  }
};

export const createUser = (user: User) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.post(API_URL, user);
    dispatch(addUser(response.data));
  } catch (error) {
    console.error('Error creating user:', error);
  }
};

export const updateUserAction = (user: User) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.put(`${API_URL}/${user._id}`, user);
    dispatch(updateUser(response.data));
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

export const deleteUserAction = (userId: string) => async (dispatch: AppDispatch) => {
  try {
    await axios.delete(`${API_URL}/${userId}`);
    dispatch(deleteUser(userId));
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};

export type { User };
