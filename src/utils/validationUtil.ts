const isValidAdminEmail = (email: string): boolean => {
  try {
    const filteredList = whiteList.filter(list => list === email);
    return filteredList.length > 0 ? true : false;
  } catch (error) {
    return false;
  }
};

const config = {
  whiteList: `${process.env.REACT_APP_ADMIN_EMAIL_WHITE_LIST}`
};

const whiteList = config.whiteList.split(",");

export default isValidAdminEmail;
