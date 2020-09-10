const isAuthenticated = state => state.auth.token;

const getUserName = state => state.auth.user.name;

const getUserEmail = state => state.auth.user.email;

export default { isAuthenticated, getUserName, getUserEmail };
