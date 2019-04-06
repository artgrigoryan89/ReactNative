import React from 'react';
import { Button, StyleSheet, ScrollView, Text, View } from 'react-native';
import { FormInput } from '../common';

export default class Login extends React.Component {

    state = {
        email: 'artgrig1989@gmail.com',
        password: 'Armine302014'
    };

    handleChange = (value, name) => {
        this.setState({ [name]: value });
    };

    onLoginPress = () => {
      const {email, password} = this.state;
      this.props.onLogIn({email, password});
      this.props.showWaitingModal();
    };

    onCreatePress = () => {
        this.props.onRegisterPress()
    };

    render() {
      const { errorMessage } = this.props;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.content}>
                    <View>
                        <Text style={{fontSize: 40, margin: 20}}>Login</Text>
                    </View>
                    <FormInput
                        type='email'
                        name='email'
                        onChange={this.handleChange}
                        style={styles.input}
                        contStyle={styles.inputCont}
                        value={this.state.email}
                    />
                    <FormInput
                        editable
                        type='password'
                        name='password'
                        onChange={this.handleChange}
                        style={styles.input}
                        contStyle={styles.inputCont}
                        value={this.state.password}
                    />
                    {!!errorMessage && <Text>{errorMessage}</Text>}
                    <Button
                        onPress={() => this.onLoginPress()}
                        title="Login"
                        color="#0C87FA"
                    />
                    <Button
                        onPress={() => this.onCreatePress()}
                        title="Register"
                        color="#0C87FA"
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      justifyContent: 'center',
      alignItems: 'center'
    },
    content: {
      flex: 1,
      width: "100%",
      marginTop: '30%',
      padding: 20
    },
    input: {
        height: 40,
        borderWidth: 1,
        marginTop: 25,
        backgroundColor: '#F7F7F7'
    },
    inputCont: {
      marginBottom: 10,
    }
});
