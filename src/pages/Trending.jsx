import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import ListeSeries from "./ListeSeries";
import "./Liste.css";

const Trending = () => {
    const [series, setSeries] = useState([]);
    useEffect(() => {
        const fetchSeries = async () => {
            const resp = await fetch("http://localhost:3000/api/series/trending");
            const data = await resp.json();
            setSeries(data.series);
        };
        fetchSeries()
    }, []);
    return (
        <>
            <Outlet></Outlet>
            <div className='listeSeries'>
                <ListeSeries series={series} lien="trending"></ListeSeries>
            </div>
        </>
    )
}
export default Trending;