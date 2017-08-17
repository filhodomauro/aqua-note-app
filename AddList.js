import React from 'react';
import { View, ScrollView } from 'react-native';

import { ListItem, Subheader } from 'react-native-material-ui/src';
import AddButton from './AddButton';

export default class AquariumList extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        let listItems = [];
        this.props.items.forEach((data, index) => {
            description = {
                primaryText: data.text
            }
            if (data.subText) {
                description.secondaryText = data.subText
            }
            listItems.push(
                <ListItem
                key={data.id}
                divider
                centerElement={description}
                onPress={data.onPress? data.onPress: function(){}}
                />
            );
        });

        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <ScrollView>
                    {listItems}
                </ScrollView>
                <AddButton onPress={this.props.addAction}/>
            </View>
        );
    }
}