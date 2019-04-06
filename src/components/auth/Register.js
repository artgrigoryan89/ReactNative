import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, View, Button} from 'react-native';
import FormInput from '../common/FormInput';
import alert from '../Alert';

export default class Register extends Component {

    state = {
        email: '',
        password: ''
    };

    handleChange = (value, name) => {
      this.setState({ [name]: value });
    };

    onRegisterPress = () => {
        const {email, password} = this.state;
        if (!email && !password) {
            alert('Email and Password are required', null);
            return
        }
        this.props.showWaitingModal();
        this.props.createUser({email, password});
    };

    render() {
      const { errorMessage } = this.props;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.content}>
                    <View>
                        <Text style={{ fontSize: 40 }}>Register</Text>
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
                            onPress={() => this.onRegisterPress()}
                            title="register"
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
