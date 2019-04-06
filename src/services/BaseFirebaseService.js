import firebase from 'react-native-firebase'

const db = firebase.database();

export default class BaseFirebaseService{
    constructor(name){
        this.ref = db.ref(name);
    }

    getData() {
      fetch("http://google.com").then(() => {
        console.log("Doneeeeeeeeee")
      })
      return this.ref.once('value').then(() => {
        console.log(arguments)
        return arguments[0]
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
