import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import {User} from '../../core/domain/User/User';
import React from 'react';

interface UserContextProps {
  user?: User;
  setUser: Dispatch<SetStateAction<User | undefined>>;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({children}: any) => {
  const [user, setUser] = useState<User>();
  const value = useMemo(() => ({user, setUser}), [user]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
