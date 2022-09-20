import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate();
    return (
        <div className='hero'>
            <div >


                <h1 onClick={() => navigate("/Home")}>
                    Welcome!
                </h1>

                <p>
                    This is a site where you can search for or scroll through lists of pokemons and check pokémons stats and abilities.<br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione velit sunt ullam numquam ducimus at? Nesciunt ea laborum, error id iste tenetur! Officia distinctio totam sed aperiam, illo molestias unde.
                </p>
            </div>
            <div className='btnDiv'>
                <button className='homeBtn' onClick={() => navigate("/Search")} >Search pokémons</button>
                <button className='homeBtn' onClick={() => navigate("/Pokemons")}>Discover pokémons</button>
            </div>

        </div>
    );
}

export default Home;
