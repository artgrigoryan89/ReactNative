import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, Button, TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import Modal from "react-native-modal";
import Input from './common/FormInput';
const {width} = Dimensions.get('window');

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            listData: [],
            text: ''
        }
    }

  componentWillReceiveProps () {
       let data = this.props.firebaseListData;
       let listData = [];
       Object.keys(data).map((key) => listData.push(data[key]));
      this.setState({listData})
    }

    toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen });


    removeItem = (data) => {
        const listData = [...this.state.listData];
        listData.splice(data.index, 1);
        this.props.removeListItem(data.index)
    };

    onCreateItem = () => {
        this.toggleModal();
        const {text} = this.state;
        let listData = [...this.state.listData];
        if (text !== '') {
            listData.push(text);
            this.onChangeText('');
          this.props.addListNote(text)
        }
    };

    onChangeText = (text) => {
            this.setState({text})
    };

    renderModal = () => {
        return (
            <Modal isVisible={this.state.isModalOpen}>
                <View style={{ backgroundColor: 'white', marginHorizontal: 30, justifyContent: 'center', paddingVertical: 20 }}>
                    <Input
                        style={{borderColor: 'gray', borderWidth: 1, margin: 20, padding: 10, height: 100}}
                        maxLength={40}
                        onChange={this.onChangeText}
                        multiline
                    />
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'space-around', paddingVertical: 20 }}>
                        <Button
                            onPress={() => this.toggleModal()}
                            title="Cancel"
                            color="#0C87FA"
                        />
                        <Button
                            onPress={() => this.onCreateItem()}
                            title="Create"
                            color="#0C87FA"
                        />
                    </View>
                </View>
            </Modal>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <SwipeListView
                    style={{width: width}}
                    disableRightSwipe
                    useFlatList
                    data={this.state.listData}
                    renderItem={ (data, rowMap) => (
                        <View style={styles.rowFront}>
                            <Text>{data.item}</Text>
                        </View>
                    )}
                    renderHiddenItem={ (data, rowMap) => (
                        <TouchableOpacity style={styles.rowBack} onPress={() => this.removeItem(data, rowMap)}>
                            <View >
                                <Text style={{marginRight:8}}>Delete</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    leftOpenValue={55}
                    rightOpenValue={-55}
                />
                {this.renderModal()}
                <View style={styles.addItemBtn}>
                    <Button
                        style={{marginRight:90}}
                        onPress={() => this.toggleModal()}
                        title="Add List Item"
                        color="#0C87FA"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#a2e665',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingLeft: 15,
    },
    input: {
        height: 40,
        borderWidth: 1,
        marginTop: 25,
        backgroundColor: '#F7F7F7'
    },
    addItemBtn: {
        paddingVertical: 20,
        marginLeft: 300
    }
});
