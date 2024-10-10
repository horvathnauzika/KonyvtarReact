import "../css/Kartya.css";

export default function Kartya(props){
    return(
        <>
        <div className="card">
            <h2>{props.obj.cim}</h2>
            <img src={props.obj.kep} alt="kep"></img>
            <p>{props.obj.leiras}</p>
            <p>{props.obj.ar}</p>
            <button>Kosárba teszem</button>
        </div>
        </>
    )
}