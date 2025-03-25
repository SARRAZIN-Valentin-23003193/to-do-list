import '../css/Footer.css';

const Footer = ({ajout}) => {

    return(
        <div className='Footer'>
            <button onClick={ajout} className="button">Ajouter une tâche</button>
            <div className='page'>
                <h2 className="H2">Tâches</h2>
                <h2 className="H2">Catégories</h2>
            </div>
        </div>
    )
}

export default Footer;