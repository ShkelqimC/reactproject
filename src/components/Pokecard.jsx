import React from 'react';
import axios
    from 'axios';


const Pokecard = ({ data }) => {

    const info = axios.get(data.url).then(res => {
        data.stats = res.data
        data.imgUrl = res.data.sprites.front_default
    })


    console.log(data, "data")
    return (
        <div>
            {data.name}
        </div>
    );
}

export default Pokecard;
