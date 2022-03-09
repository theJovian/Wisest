import {http} from '../../infraestructure/http/http';
import {UserDTO} from '../../infraestructure/http/dto/UserDTO';

export const UserRepository = {
  getUser: async () => {
    const user = await http.get<UserDTO>('users/1');
    return {
      id: user.id,
      username: user.username,
    };
  },
};
