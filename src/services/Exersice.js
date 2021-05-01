import axios from "axios";
const BASE_URL = "http://localhost:5000";

export const getExercises = async (username) => {
  const url = `${BASE_URL}/exercises/`;
  const response = await axios.get(url);
  if (response.data) {
    return response.data;
  }
  return false;
};

export const deleteExercise = async (id) => {
  const url = `${BASE_URL}/exercises/${id}`;
  const response = await axios.delete(url);
  if (response.data) {
    return response.data;
  }
  return false;
};

export const getUsers = async () => {
  const url = `${BASE_URL}/users/`;
  const response = await axios.get(url);
  if (response.data) {
    return response.data;
  }
  return false;
};

export const addUser = async (user) => {
  const url = `${BASE_URL}/users/`;
  const response = await axios.post(url, user);
  if (response.data) {
    return response.data;
  }
  return false;
};

export const getExerciseById = async (id) => {
  const url = `${BASE_URL}/exercises/${id}`;
  const response = await axios.get(url);
  if (response.data && response.data.username) {
    return response.data;
  }
  return false;
};

export const addExercise = async (exerciseObject) => {
  const url = `${BASE_URL}/exercises/add`;
  const response = await axios.post(url, exerciseObject);
  if (response.data) {
    return response.data;
  }
  return false;
};

export const editExercise = async (id, exerciseObject) => {
  const url = `${BASE_URL}/exercises/update/${id}`;
  const response = await axios.post(url, exerciseObject);
  if (response.data) {
    return response.data;
  }
  return false;
};
