import {UserRepository} from '../domain/User/UserRepository';

export const UserService = {
  getUser: (email: string) => {
    return UserRepository.getUser(email);
  },
  addUser: async (email: string, password: string, username: string) => {
    return await UserRepository.postUser(email, password, username);
  },
  register: async (email: string, password: string, username: string) => {
    const response = await UserRepository.registerFirebase(email, password);
    if (response.status === 'error') {
      return response;
    } else {
      return await UserRepository.postUser(email, password, username);
    }
  },
  login: async (email: string, password: string) => {
    const response = await UserRepository.loginFirebase(email, password);
    if (response.status === 'error') {
      return response;
    } else {
      return await UserRepository.getUser(email);
    }
  },
};
