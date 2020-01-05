const validateUser = (user: string): boolean => {
  try {
    console.log(user);
    return true;
  } catch (error) {
    return false;
  }
};
export default validateUser;
