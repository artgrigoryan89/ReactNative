import React, {Component} from 'react';
import { View, TextInput } from 'react-native';

export default class FormInput extends Component {
    handleChange = value => {
        this.props.onChange && this.props.onChange(value, this.props.name);
    };

    render() {
        return (
            <View style={[this.props.contStyle ]}>
                <TextInput
                    editable
                    onChangeText={this.handleChange}
                    autoCapitalize="none"
                    underlineColorAndroid='transparent'
                    {...this.props}
                />
            </View>
        )
    }
}
