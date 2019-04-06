import React, {Component} from 'react';
import {View, ActivityIndicator, Text, StyleSheet, Modal} from 'react-native';

export class WaitingModalComponent extends Component {

    static defaultProps = {
        isModalVisible: false
    };

    handleCloseModal = () => {
        this.props.hideWaitingModal();
    };

    render() {
        return (
            <Modal visible={this.props.isModalVisible}
                   transparent
                   animationType="fade"
                   onRequestClose={this.handleCloseModal}
            >
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text style={styles.text}>Please wait...</Text>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(38, 38, 38, 0.5)'
    },
    text: {
        color: 'white'
    }
});