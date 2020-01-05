const validateUserEmail = (email: string): boolean => {
  try {
    const filteredList = whiteList.filter(list => list === email);
    return filteredList.length > 0 ? true : false;
  } catch (error) {
    return false;
  }
};

const whiteList = ["jukka.edvardsson@gmail.com", "test@test.com"];

export default validateUserEmail;
