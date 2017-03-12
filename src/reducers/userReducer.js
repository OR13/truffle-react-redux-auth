export default (state = null, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
    case 'USER_UPDATED':
      return action.payload;
    case 'USER_LOGGED_OUT':
      return null;
    default:
      return state;
  }
};
