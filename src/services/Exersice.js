import axios from "axios";
const BASE_URL = 'http://localhost:5000'

export const getExercises = async username => {
  const url = `${BASE_URL}/exercises/`;
  const response = await axios.get(url);
  if (response.data) {
    return response.data;
  }
  return false;
};

export const deleteExercise = async id => {
    const url = `${BASE_URL}/exercises/${id}`;
    const response = await axios.delete(url);
    if (response.data) {
      return response.data;
    }
    return false;
  };
  

export const getUsers = async name => {
  const url = `${BASE_URL}/users/`;
  const response = await axios.get(url);
  if (response.data) {
    return response.data;
  }
  return false;
};

export const getExerciseById = async id => {
  const url = `${BASE_URL}/exercises/${id}`;
  const response = await axios.get(url);
  if (response.data && response.data.username) {
    return response.data;
  }
  return false;
};

export const addExercise = async exerciseObject => {
    const url = `${BASE_URL}/exercises/`;
    const response = await axios.post(url, exerciseObject);
    if (response.status === 200 && response.data.count === 1) {
      return response.data.results[0];
    }
    return false;
  };

  export const editExercise = async (id, exerciseObject) => {
    const url = `${BASE_URL}/exercises/update/${id}`;
    const response = await axios.post(url, exerciseObject);
    if (response.status === 200 && response.data.count === 1) {
      return response.data.results[0];
    }
    return false;
  };
