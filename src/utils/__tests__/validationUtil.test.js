import validateUser from "../validationUtil";

describe('test validationUtil', () => {
    describe('test validateUser', () => {
        test('validateUser should return valid user', () => {
            const validatedUser = validateUser('test');
            expect(validatedUser).toEqual(true);
        });
        test('validateUser should return invalid user', () => {
            const validatedUser = validateUser('test');
            expect(validatedUser).toEqual(false);
        });
    });
});
