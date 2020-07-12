import React, { createContext, useState, useContext } from 'react';
import { fetchCar } from '../services/api';
interface car {
  id: number;
  owner_id: number;
  model: string;
  brand: string;
  year: number;
  plate: string;
  cor: string;
}

interface carContextData {
  getCar(plate: string): Promise<void>;
  car: car | null;
  error: any;
}

const carContext = createContext<carContextData>({} as carContextData);

export const CarProvider: React.FC = ({ children }) => {
  const [car, setCar] = useState<car | null>(null);
  const [error, setError] = useState(null);
  async function getCar(plate: string) {
    const data = await fetchCar(plate);
    if (data.id) {
      setError(null);
      setCar(data);
    } else {
      setError(data.message);
    }
  }
  return (
    <carContext.Provider value={{ getCar, car, error }}>
      {children}
    </carContext.Provider>
  );
};

export function useCar() {
  const context = useContext(carContext);
  return context;
}
