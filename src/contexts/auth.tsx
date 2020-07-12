import React, { createContext, useState, useEffect, useContext } from 'react';
import { AsyncStorage, Keyboard } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import { fetchLogin, api } from '../services/api';
interface user {
  active: number;
  id: number;
  name: string;
  type: string;
  username: string;
}
interface authContextData {
  signed: boolean;
  user: user | null;
  loading: boolean;
  singIn(username: string, password: string): Promise<void>;
  singOut(): void;
  error: any;
}

const authContext = createContext<authContextData>({} as authContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<user | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const localStoragedData = async () => {
      const userStoraged = await AsyncStorage.getItem('@RNVisita:user');
      const tokenStoraged = await AsyncStorage.getItem('@RNVisita:token');

      if (userStoraged && tokenStoraged) {
        api.defaults.headers.Authorization = `Bearer ${tokenStoraged}`;
        setUser(JSON.parse(userStoraged));
      }
      SplashScreen.hideAsync();
    };
    localStoragedData();
  }, []);

  async function singIn(username: string, password: string) {
    setLoading(true);
    const data = await fetchLogin(username, password);
    if (data.user) {
      Keyboard.dismiss();
      const { access_token, user } = data;
      setUser(user);
      api.defaults.headers.Authorization = `Bearer ${access_token.token}`;
      await AsyncStorage.setItem('@RNVisita:user', JSON.stringify(user));
      await AsyncStorage.setItem('@RNVisita:token', access_token.token);
      setLoading(false);
    } else {
      setError(data.message);
      setLoading(false);
    }
  }

  function singOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
      setLoading(false);
    });
  }
  return (
    <authContext.Provider
      value={{ signed: !!user, user, singIn, loading, singOut, error }}
    >
      {children}
    </authContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(authContext);
  return context;
}
