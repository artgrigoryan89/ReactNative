import firebase from 'react-native-firebase';
//import {GoogleSignin} from 'react-native-google-signin';
//import {LoginManager, AccessToken} from 'react-native-fbsdk';

export class FirebaseAuthService {
    firebaseCreateUser(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
    }

    firebaseLogin(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password)
    }

    firebaseLogout() {
      return firebase.auth().signOut()
    }

    firebaseFbAuth() {
        return async (dispatch) => {
            try {
                const result = await LoginManager.logInWithReadPermissions(['public_profile', 'user_friends', 'email']);
                if (result.isCancelled) {
                    console.log('Whoops!', 'You cancelled the sign in.');
                    return;
                }
                const tokenData = await AccessToken.getCurrentAccessToken();
                const credential = firebase.auth.FacebookAuthProvider.credential(tokenData.accessToken);
                await firebase.auth().signInWithCredential(credential)
                loginUserSuccess(dispatch)
            } catch (err) {
                console.log('Sign in error', error);
                loginSingUpFail(dispatch, error.message);
            }

        }
    }

    firebaseGoogleAuth() {
        return async () => {
            try {
                await GoogleSignin.configure();
                const data = await GoogleSignin.signIn();
                const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
                await firebase.auth().signInWithCredential(credential);
            } catch (error) {
                console.error(error);
            }
        }
    }
}
