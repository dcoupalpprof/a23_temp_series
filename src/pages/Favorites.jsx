import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Liste.css";

const Favorites = ({ favoris }) => {
    const [series, setSeries] = useState([]);
    useEffect(() => {
        const fetchSeries = async () => {
            const resp = await fetch("http://localhost:3000/api/series/trending");
            const data = await resp.json();
            setSeries(data.series);
        };
        fetchSeries()
    }, []);
    let { pathname } = useLocation();
    pathname = pathname.replace("/favorites/", "");
    const listeFavoris = [];
    {
        series.map((s) => (
            favoris.includes(s.id.toString()) ? listeFavoris.push(s) : null
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
                                <Link className="lien_details" to={`/favorites/${id}`}>Détails</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Favorites;