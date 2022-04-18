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
    } as User;
  },
  postUser: async (email: string, username: string) => {
    const [user] = await http.post('users', {email, username});
    return {username: user.username, email: user.email, id: user.id} as User;
  },
  registerFirebase: async (email: string, password: string) => {
    return await firebase.register(email, password);
  },
  loginFirebase: async (email: string, password: string) => {
    return await firebase.login(email, password);
  },
  deleteUser: async (userId: number) => {
    return await http.delete(`users/${userId}`);
  },
  logoutFirebase: async () => {
    return await firebase.logout();
  },
  deleteUserFirebase: async () => {
    return await firebase.delete();
  },
  reauthenticateFirebase: async (email: string, password: string) => {
    await firebase.reauthenticate(email, password);
  },
};
