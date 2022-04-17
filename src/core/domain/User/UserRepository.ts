import {http} from '../../infraestructure/http/http';
import {UserDTO} from '../../infraestructure/http/dto/UserDTO';
import {firebase} from '../../infraestructure/Firebase/Firebase';
import {User} from './User';

export const UserRepository = {
  getUser: async (email: string) => {
    const user = await http.get<UserDTO>(`users/${email}`);
    return {
      id: user.id,
      username: user.username,
      email: user.email,
    };
  },
  register: async (email: string, password: string) => {
    return await firebase.register(email, password);
  },
  postUser: async (email: string, password: string, username: string) => {
    const [user] = await http.post('users', {email, password, username});
    return {username: user.username, email: user.email, id: user.id} as User;
  },
};
