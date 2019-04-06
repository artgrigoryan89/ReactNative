import {Alert} from 'react-native';

const alert = (message, callback) => {
    Alert.alert(
        '',
        message,
        [
            {text: 'OK', onPress: () => {callback && callback()}}
        ],
        { cancelable: true }
    )
};

export default alert