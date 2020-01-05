import validateUserEmail from "../validationUtil";

describe("test validationUtil", () => {
  describe("test validateUser", () => {
    test("validateUser should return true, because user email is valid", () => {
      const validatedUser = validateUserEmail("test@test.com");
      expect(validatedUser).toEqual(true);
    });
    test("validateUser should return false, because user email is invalid", () => {
      const validatedUser = validateUserEmail("test");
      expect(validatedUser).toEqual(false);
    });
    test("validateUser should return false, because user email is invalid 2", () => {
      const validatedUser = validateUserEmail("test2@test.com");
      expect(validatedUser).toEqual(false);
    });
  });
});
