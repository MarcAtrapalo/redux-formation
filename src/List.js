import React, { Component } from 'react';


export default class List extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {items, selectedItem, onSelect, ItemComponent} = this.props;
        console.log(this.props);

        return (
            <ul className="heroes">

                {items.map((item, i) => (
                    <ItemComponent
                        key={i}
                        isSelected={item.id === selectedItem}
                        onSelect={onSelect}
                        {...item}
                    >
                    </ItemComponent>
                ))}

            </ul>
        );
    }

}