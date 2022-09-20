import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom'
import Home from '../routes/Home';
import Pokemons from '../routes/Pokemons';
import Search from '../routes/Search';


const Navigation = () => {
    return (
        <Router>

            <div className='navbar'>

                <h1>Pokéchecker</h1>
                <ul>
                    <li>
                        <Link className='navLink' to="/">Home</Link>
                    </li>
                    <li>
                        <Link className='navLink' to="/Pokemons">Pokemons</Link>
                    </li>
                    <li>
                        <Link className='navLink' to="/Search">Search</Link>
                    </li>
                </ul>

            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Pokemons" element={<Pokemons />} />
                <Route path="/Search" element={<Search />} />
            </Routes>
        </Router>

    );
}

export default Navigation;
