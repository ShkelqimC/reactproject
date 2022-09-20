import React from 'react';
import { v4 as uuidv4 } from 'uuid';


const Abilities = ({ abilities }) => {

    return (
        <div className='abilities'>
            <p className='ab_title'>
                Abilities:
            </p>

            <ul>
                {abilities.map(a => {
                    return <li key={uuidv4()}>{a.ability.name}</li>
                })}
            </ul>
        </div>
    );
}

export default Abilities;
