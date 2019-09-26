import userTypes from '../user.types';
import SagaTester from 'redux-saga-tester';
import { onSignInStart } from '../user.sagas';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import firebase from "firebase";

describe('start saga test', () => {
    let sagaTester = null;

    beforeEach(() => {
        sagaTester = new SagaTester({});
        sagaTester.start(onSignInStart);
    });

    it('should call Sign in start and sign in failed', async () => {
        await sagaTester.dispatch({
            type: userTypes.SIGN_iN_START,
        });

        await sagaTester.waitFor(userTypes.SIGN_iN_FAILURE);
        expect(sagaTester.wasCalled(userTypes.SIGN_iN_START)).toEqual(true);
        expect(sagaTester.wasCalled(userTypes.SIGN_iN_FAILURE)).toEqual(true);
        expect(sagaTester.wasCalled(userTypes.SIGN_iN_SUCCESS)).toEqual(false);
    });

    const signInWithPopup = jest.fn(() => {
        return Promise.resolve('result of signInWithPopup');
    });

    const GoogleAuthProvider = jest.fn(() => {
        return Promise.resolve('result of GoogleAuthProvider');
    });

    it('should call Sign in start and sign in successful', async () => {
        await sagaTester.dispatch({
            type: userTypes.SIGN_iN_START,
        });

        jest.spyOn(firebase, 'initializeApp')
            .mockImplementation(() => {
                return {
                    auth: () => {
                        return {
                            signInWithPopup,
                        }
                    }
                };
            });

        jest.spyOn(firebase, 'auth')
            .mockImplementation(() => {
                return {
                    GoogleAuthProvider,
                    currentUser: {
                        displayName: 'testName',
                        email: 'test@test.com',
                        emailVerified: true
                    },
                }
            });

        // jest.mock('firebase/auth', () => ({
        //         signInWithPopup: jest.fn(() => (Promise.resolve({loading: false, error: false, data: {currentUser: "test"}}))),
        // }));

        // jest.mock('firebase/auth');
        //
        // let mockAuth = jest.fn();
        // const authReturnValue = 'auth';
        // mockAuth.mockReturnValueOnce(authReturnValue);
        // firebase.auth = mockAuth;

        await sagaTester.waitFor(userTypes.SIGN_iN_FAILURE);
        // expect(firebase.auth).toHaveBeenCalled();
        // expect(mockAuth.mock.calls.length).toBe(1);
        // expect(firebase.auth.GoogleAuthProvider).toHaveBeenCalled();
        expect(sagaTester.wasCalled(userTypes.SIGN_iN_START)).toEqual(true);
        expect(sagaTester.wasCalled(userTypes.SIGN_iN_FAILURE)).toEqual(false);
        expect(sagaTester.wasCalled(userTypes.SIGN_iN_SUCCESS)).toEqual(true);
    });

    it('should call Sign in start and sign in is succesfull', async () => {
        const gen = cloneableGenerator(onSignInStart)();
        gen.next(); //auth.signInWithPopup(googleProvider)
        const { next } = gen.clone();
        expect(next().done).toEqual(true);
    });

    it('should call Sign in start and sign in is failed', async () => {
        const gen = cloneableGenerator(onSignInStart)();
        const { next } = gen.clone();
        expect(next().done).toEqual(false);
    });
});
