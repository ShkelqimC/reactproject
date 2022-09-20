import React from 'react';

const Abilities = ({ abilities }) => {

    return (
        <div className='abilities'>
            <p className='ab_title'>
                Abilities:
            </p>

            <ul>
                {abilities.map(a => {
                    { console.log(a.ability.name, "a") }
                    return <li>{a.ability.name}</li>
                })}
            </ul>
        </div>
    );
}

export default Abilities;
