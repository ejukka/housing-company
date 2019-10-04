jest.mock('firebase', () => ({
    auth: jest.fn(() => ({
        signInWithPopup: jest.fn(() => (Promise.resolve({loading: false, error: false, data: {currentUser: "test"}}))),
        GoogleAuthProvider: jest.fn(()=> (Promise.resolve({GOOGLE_SIGN_IN_METHOD: "test", credential: {isToken: "test", accessToken: "test"}}))),
    }))
}));
