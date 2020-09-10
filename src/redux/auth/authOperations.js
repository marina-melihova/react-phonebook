import axios from 'axios';
import authActions from './authActions';

const API_KEY = 'AIzaSyCdjs0kxbbX6XDMv4SN41AvvflQwL8OqQM';

const methods = {
  signUp: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
  signIn: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
  getUser: `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`,
};

const register = userData => dispatch => {
  dispatch(authActions.registerStart());

  axios
    .post(methods.signUp, userData)
    .then(response => {
      console.log(response);
      dispatch(
        authActions.registerSuccess({
          token: response.data.idToken,
          email: response.data.email,
        }),
      );
    })
    .catch(error => dispatch(authActions.registerError(error)));
};

const logIn = userData => dispatch => {
  dispatch(authActions.loginStart());

  axios
    .post(methods.signIn, userData)
    .then(response => {
      dispatch(
        authActions.loginSuccess({
          token: response.data.idToken,
          email: response.data.email,
        }),
      );
    })
    .catch(error => dispatch(authActions.loginError(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  dispatch(authActions.getCurrentUserStart());
  axios
    .post(methods.getUser, { idToken: persistedToken })
    .then(({ data }) => {
      // console.log(data.users[0]);
      dispatch(authActions.getCurrentUserSuccess(data.users[0]));
    })
    .catch(error => authActions.getCurrentUserError(error));
};

export default { register, logIn, getCurrentUser };
