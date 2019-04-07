import firebase from 'react-native-firebase'

const db = firebase.database();

export default class BaseFirebaseService{
    constructor(name){
        this.ref = db.ref(name);
    }

    getData() {
      return this.ref.once('value').then((snapshot) => {
        console.log(snapshot)
        return snapshot
      }).catch(err => {
        console.log(err)
        console.log(err)
      });
    }

    add(item) {
        return this.ref.push(item);
    }

    delete(id) {
        return this.ref.child(id).remove();
    }
}
