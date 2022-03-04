import {http} from '../../infraestructure/http/http';
import {UserDTO} from '../../infraestructure/http/dto/UserDTO';

export const UserRepository = {
  getUser: async () => {
    const user = await http.get<UserDTO>(
      'http://ec2-13-38-81-126.eu-west-3.compute.amazonaws.com/api/users/1',
    );
    return {
      id: user.id,
      username: user.username,
    };
  },
};
