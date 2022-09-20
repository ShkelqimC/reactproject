import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate
} from 'react-router-dom'
import Home from '../routes/Home';
import Pokemons from '../routes/Pokemons';


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
                </ul>

            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Pokemons" element={<Pokemons />} />
            </Routes>
        </Router>

    );
}

export default Navigation;
