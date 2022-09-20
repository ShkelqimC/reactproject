import React, { useState, useEffect } from 'react';
import axios
    from 'axios';
import Stats from './Stats';
import Abilities from './Abilities';

const Pokecard = ({ data }) => {
    const [picLoading, setPicLoading] = useState(false)


    useEffect(() => {
        setPicLoading(true)
        const info = axios.get(data.url).then(res => {
            setPicLoading(true)
            data.stats = res.data
            data.imgUrl = res.data.sprites.front_default
        })


        setPicLoading(false)


    }, [])



    return (
        <div className='pokeCard'>
            <div className='cardTitle'>
                <img className='poke-thumbnail' src={data.imgUrl} />
                {data.name}
            </div>
            <div className='stats'>
                {data.stats && <Stats stats={data.stats} />}
            </div>
            <div className='abilities'>
                {data.stats && <Abilities abilities={data.stats.abilities} />}
            </div>
        </div>
    );
}

export default Pokecard;
