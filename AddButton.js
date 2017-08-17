import React from 'react';
import { ActionButton } from 'react-native-material-ui';

const buttonStyle = {
    container: {
        flexDirection: 'row'
    }
}

export default class AddButton extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ActionButton style={buttonStyle}/>
        );
    }
}