import { API_BASE_URL } from "../../config/apiConfig";
import axios from "axios";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionType";
import { toast } from "react-toastify";

const token = localStorage.getItem("jwt");

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const signup = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    console.log(userData,'uuuuuuuuuuuuu')
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    console.log(response,'rrrrrrrrrrrrrr')
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
      console.log(user,'ssssssssssssssssssssssssss')
      dispatch(registerSuccess(user.jwt));
    }
  } catch (error) {
    toast.error("Signup failed. Please try again.");
    console.error('API call failed:', error);
    dispatch(registerFailure(error.message));
  }
};

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
      dispatch(loginSuccess(user.jwt));
      toast.success("Login Succesfull")
    }
  } catch (error) {
    toast.error("Login failed. Please try again.");
    dispatch(loginFailure(error.message));
  }
};

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFaliure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = (jwt) => async (dispatch) => {
  dispatch(getUserRequest());
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });
    const user = response.data;
    console.log(user,'uuuuuuuuuuuuuuuuuuuuuuuuuu')
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFaliure(error.message));
  }
};

export const logout = () => (dispatch) => {
  console.log(user,'ooooooooooooooooooooo')
  dispatch({ type: LOGOUT, payload: null });
};

