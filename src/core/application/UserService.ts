import {UserRepository} from '../domain/User/UserRepository';

export const UserService = {
  getUser: () => {
    return UserRepository.getUser();
  },
};
