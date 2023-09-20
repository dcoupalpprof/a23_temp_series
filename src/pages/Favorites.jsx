import { Link, Outlet } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "./Liste.css";

const Favorites = ({ listeSeries, favoris }) => {
    let { pathname } = useLocation();
    pathname = pathname.replace("/favorites/", "");
    const listeFavoris = [];
    {
        listeSeries.map((s) => (
            favoris.includes(s.id) ? listeFavoris.push(s) : null
        ))
    }
    return (
        <>
            <Outlet></Outlet>
            <div className='listeSeries'>
                {
                    listeFavoris.map(({ id, poster, title, year, imdb }) => (
                        <div key={id} className={id.toString() === pathname ? "on" : "off"} >
                            <img src={poster} className="imgAffiche" />
                            <div>
                                <h2>{title}</h2>
                                <p>{year}</p>
                                <a href={imdb}>IMDB</a>
                                <Link to={`/favorites/${id}`}>Détails</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Favorites;