import React from 'react';

import {Card} from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
    /*
    / props is list of any properties written onto component where it gets used.
    / eg. <CardList name="Andy" id="1" /> - props will contain 'name' and 'id' vars. 
    / props ALWAYS CONTAINS 'children' property
    */
    <div className='card-list'>
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
);