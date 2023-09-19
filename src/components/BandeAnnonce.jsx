import "./BandeAnnonce.css";

const BandeAnnonce = ({ bandeAnnonce }) => {
    let bA = bandeAnnonce.replace("watch?v=", "embed/");
    return (
        <div className="bandeAnnonce">
            <iframe src={bA}></iframe>
        </div>
    );
};

export default BandeAnnonce;