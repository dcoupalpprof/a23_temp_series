import { Link, useLocation } from "react-router-dom";
import "./Liste.css";

const ListeSeries = ({ series, lien }) => {
    let { pathname } = useLocation();
    pathname = pathname.replace(`/${lien}/`, "");
    return (
        series.map(({ id, poster, title, year, imdb }) => (
            <div key={id} className={id.toString() === pathname ? "on" : "off"}>
                <img src={poster} className="imgAffiche" />
                <div>
                    <h2>{title}</h2>
                    <p>{year}</p>
                    <a target="_blank" href={imdb}>IMDB</a>
                    <Link className="lien_details" to={`/${lien}/${id}`}>Détails</Link>
                </div>
            </div>
        ))
    )
}
export default ListeSeries;