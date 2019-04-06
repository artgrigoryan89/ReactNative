import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, View, Dimensions, Button} from 'react-native';
const {width} = Dimensions.get('window');

export default class WelcomePage extends Component {

    onLogOut = () => {
        this.props.logOut()
    };

    goToList = () => {
       this.props.goToList()
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.content}>
                    <View style={{ marginTop: '30%' }}>
                        <Text style={{ fontSize: 30 }}>Welcome Page</Text>
                        <Button
                            onPress={() => this.onLogOut()}
                            title="Log Out"
                            color="#841584"
                        />
                    </View>
                    <View style={{marginTop: 20}}>
                        <Button
                            onPress={() => this.goToList()}
                            title="Go To List"
                            color="#0C87FA"
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        width: width - 30
    }
});