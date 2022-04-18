import auth from '@react-native-firebase/auth';

export interface Response {
  status: 'ok' | 'error';
  message: string;
}

const register = (email: string, password: string) => {
  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
      return {
        status: 'ok',
        message: 'user registered successfully',
      } as Response;
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
        return {
          status: 'error',
          message: 'That email address is already in use!',
        } as Response;
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        return {
          status: 'error',
          message: 'That email address is invalid!',
        } as Response;
      } else {
        console.log(error);
        return {
          status: 'error',
          message: 'something went wrong, we apologize',
        } as Response;
      }
    });
};

const login = (email: string, password: string) => {
  return auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Signed in!');
      return {
        status: 'ok',
        message: 'user logged in successfully',
      } as Response;
    })
    .catch(error => {
      if (error.code === 'auth/user-not-found') {
        console.log('User does not exist');
        return {
          status: 'error',
          message: 'User does not exist',
        } as Response;
      }
      if (error.code === 'auth/wrong-password') {
        console.log('Wrong email or password');
        return {
          status: 'error',
          message: 'Wrong email or password',
        } as Response;
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
        return {
          status: 'error',
          message: 'Wrong email or password',
        } as Response;
      } else {
        console.log(error);
        return {
          status: 'error',
          message: 'something went wrong, we apologize',
        } as Response;
      }
    });
};

const logout = async () => {
  return await auth()
    .signOut()
    .then(() => {
      console.log('logged out');
      return {
        status: 'ok',
        message: 'user logged out successfully',
      } as Response;
    })
    .catch(() => {
      return {
        status: 'error',
        message: 'something went wrong, we apologize',
      } as Response;
    });
};

const _delete = async () => {
  return await auth()
    .currentUser?.delete()
    .then(() => {
      return {
        status: 'ok',
        message: 'user deleted successfully',
      } as Response;
    })
    .catch(() => {
      return {
        status: 'error',
        message: 'something went wrong, we apologize',
      } as Response;
    });
};

const reauthenticate = async (email: string, password: string) => {
  const credential = auth.EmailAuthProvider.credential(email, password);
  await auth().currentUser?.reauthenticateWithCredential(credential);
};

export const firebase = {
  register,
  login,
  logout,
  delete: _delete,
  reauthenticate,
};
