import { MdFavorite } from 'react-icons/md';

const NombreFavorites = ({ seriesAimees }) => {
    return <p>{seriesAimees} séries {MdFavorite}</p>
}

export default NombreFavorites;