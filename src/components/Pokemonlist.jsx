import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Pokecard from './Pokecard';
import Pagination from './Pagination';


const Pokemonlist = () => {
    const [page, setPage] = useState("https://pokeapi.co/api/v2/pokemon");
    const [pokemon, setPokemon] = useState([{}])
    const [nextPage, setNextpage] = useState();
    const [prevPage, setPrevpage] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        let cancel
        axios.get(page, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            console.log(res, "res")
            setNextpage(res.data.next)
            setPrevpage(res.data.previous)
            setPokemon(res.data.results.map(p => {
                return {
                    name: p.name,
                    url: p.url,
                }
            }))
            setLoading(false)
        })


        return () => cancel()

    }, [page])

    function gotoNextPage() {
        setPage(nextPage)
    }
    function gotoPrevPage() {
        setPage(prevPage)
    }

    if (loading) return <div className='loading'>Loading poke data...</div>



    return (
        <div className='pokeList'>
            <div className='pagination'><Pagination
                gotoNextPage={nextPage ? gotoNextPage : null}
                gotoPrevPage={prevPage ? gotoPrevPage : null}
            /></div>
            <div className='cardHolder'>
                {pokemon.map(p => (<Pokecard key={p.name} data={p} />))}
            </div>
            <div className='pagination'><Pagination
                gotoNextPage={nextPage ? gotoNextPage : null}
                gotoPrevPage={prevPage ? gotoPrevPage : null}
            /></div>
        </div>
    );
}

export default Pokemonlist;
