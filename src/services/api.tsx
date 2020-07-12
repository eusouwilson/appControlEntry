import axios from 'axios';
interface userData {
  user: object;
  access_token: object;
}

interface carData {
  car: object;
}

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export const fetchLogin = async (username: string, password: string) => {
  try {
    const { data } = await api.post(`login`, {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    const data = { message: error };
    return data;
  }
};

export const fetchCar = async (plate: string) => {
  try {
    const { data } = await api.get(`/car/${plate}`);
    return data;
  } catch (error) {
    const data = { message: error };
    return data;
  }
};
