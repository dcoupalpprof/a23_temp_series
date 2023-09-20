import { Link, Outlet } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "./Liste.css";

const Trending = ({ listeSeries }) => {
    let { pathname } = useLocation();
    pathname = pathname.replace("/trending/", "");
    return (
        <>
            <Outlet></Outlet>
            <div className='listeSeries'>
                {
                    listeSeries.map(({ id, poster, title, year, imdb }) => (
                        <div key={id} className={id.toString() === pathname ? "on" : "off"}>
                            <img src={poster} className="imgAffiche" />
                            <div>
                                <h2>{title}</h2>
                                <p>{year}</p>
                                <a href={imdb}>IMDB</a>
                                <Link data-cy="lien_details" to={`/trending/${id}`}>Détails</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Trending;