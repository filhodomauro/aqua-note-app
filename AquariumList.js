import React from 'react';

import AddList from './AddList';

const mockItems = [
    {
        id: 1,
        text: "Aquario Plantado",
        subText: "Doce - 100L",
        capacity: 100,
        water: "Doce"
    },
    {
        id: 2,
        text: "Bettas",
        subText: "Doce - 17L",
        capacity: 17,
        water: "Doce"
    }
]

export default class AquariumList extends React.Component {
    
    render() {
        return (
            <AddList items={mockItems}/>
        );
    }
}