import isValidAdminEmail from "../validationUtil";

describe("test validationUtil", () => {
  describe("test isValidAdminEmail", () => {
    test("isValidAdminEmail should return true, because user email is valid", () => {
      const validatedUser = isValidAdminEmail("test@test.com");
      expect(validatedUser).toEqual(true);
    });
    test("isValidAdminEmail should return false, because user email is invalid", () => {
      const validatedUser = isValidAdminEmail("test");
      expect(validatedUser).toEqual(false);
    });
    test("isValidAdminEmail should return false, because user email is invalid 2", () => {
      const validatedUser = isValidAdminEmail("test2@test.com");
      expect(validatedUser).toEqual(false);
    });
  });
});
