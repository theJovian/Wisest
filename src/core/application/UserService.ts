import {UserRepository} from '../domain/User/UserRepository';

export const UserService = {
  getUser: (email: string) => {
    return UserRepository.getUser(email);
  },
  addUser: async (email: string, password: string, username: string) => {
    return await UserRepository.postUser(email, password, username);
  },
  registerUser: async (email: string, password: string, username: string) => {
    const response = await UserRepository.register(email, password);
    if (response.status === 'error') {
      return response;
    } else {
      return await UserRepository.postUser(email, password, username);
    }
  },
};
