const errorsMessages = {
  user_is_not_admin: 'User must be an administrator to do this operation.',
  user_is_not_registered: 'User is not registered.',
  title_already_registered: 'This title is already registered',
  incorrect_credentials: 'Incorrect credentials, try again.',
  missing_auth_token: 'Authentication token is missing.',
  email_already_registered: 'This email is already registered.',
  password_reset_token_not_format_valid: 'Token must be a string.',
  invalid_token: 'Invalid authentication token, please log in a new session.',
  expired_token: 'Expired token, please try again with another link.',
};

export { errorsMessages };
