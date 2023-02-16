import { HeroCard } from '../components'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { getHeroesByName } from '../helpers'

export const SearchPage = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { q = '' } = queryString.parse(location.search)


    const { searchText, onInputChange } = useForm({
        searchText: q
    })

    const heros = getHeroesByName(q)

    const onSearchSubmit = (event) => {
        event.preventDefault()

        // if (searchText.trim().length <= 1) return;
        navigate(`?q=${searchText}`)
    }

    return (
        <>
            <h1>SearchPage</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-primary mt-2">
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        (q === '') 
                        ? <div className="alert alert-primary animate__animated animate__fadeIn">Search a Hero</div>
                        : (heros.length === 0) && <div className="alert alert-danger animate__animated animate__fadeIn">No heros founded for {q}</div>
                        
                    }
                    {console.log(q)}




                    {
                        heros.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }


                </div>
            </div>

        </>
    )
}
