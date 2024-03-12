interface validateOutput {
  isValidated: boolean;
  validationErrorMessage: string | null;
}

/**
 *
 * @param email
 * @returns
 */
export const validateEmail = (email: string): validateOutput | undefined => {
  if (email.length > 3) {
    return { isValidated: true, validationErrorMessage: null };
  }
};
/**
 *
 * @param username
 * @returns
 */
export const validateUsername = (
  username: string,
): validateOutput | undefined => {
  if (username.length > 3) {
    return { isValidated: true, validationErrorMessage: null };
  }
};

/**
 *
 * @param fullName
 * @returns
 */
export const validateFullName = (
  fullName: string,
): validateOutput | undefined => {
  if (fullName.length > 0) {
    return { isValidated: true, validationErrorMessage: null };
  }
};
/**
 *
 * @param password
 * @returns
 */
export const validatePassword = (
  password: string,
): validateOutput | undefined => {
  if (password.length > 0) {
    return { isValidated: true, validationErrorMessage: null };
  }
};
