import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import Login from './screens/Login';
import Register from './screens/Register';
import WelcomePage from './screens/WelcomePage';
import List from './screens/List';
import WaitingModal from './containers/WaitingModalContainer';

export default class App extends Component {
    scenes = {
        login: {
            hideNavBar: true,
            initial: false
        },
        register: {
            hideNavBar: true,
            initial: false
        },
        welcomePage: {
            hideNavBar: true,
            initial: false
        },
        list: {
            hideNavBar: true,
            initial: false
        }
    };

    constructor(props) {
        super(props);
        this.setInitialScene('login');
    }

    setInitialScene(name) {
        for (let scene in this.scenes) {
            this.scenes[scene].initial = scene === name;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Router>
                    <Scene key="root">
                        <Scene key="login"
                               component={Login}
                               title="Login"
                               hideNavBar={this.scenes.login.hideNavBar}
                               initial={this.scenes.login.initial}
                        />
                        <Scene key="register"
                               component={Register}
                               title="Register"
                               hideNavBar={this.scenes.register.hideNavBar}
                               initial={this.scenes.register.initial}
                        />
                        <Scene key="welcomePage"
                               component={WelcomePage}
                               title="WelcomePage"
                               hideNavBar={this.scenes.welcomePage.hideNavBar}
                               initial={this.scenes.welcomePage.initial}
                        />
                        <Scene key="list"
                               component={List}
                               title="List"
                               hideNavBar={this.scenes.list.hideNavBar}
                               initial={this.scenes.list.initial}
                        />
                    </Scene>
                </Router>
                <WaitingModal/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
