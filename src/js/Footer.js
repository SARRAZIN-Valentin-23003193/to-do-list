import '../css/Footer.css';

const Footer = ({affiche}) => {

    return(
        <div className='Footer'>
            <button onClick={affiche} className="button">Ajouter une tâche</button>
            <div className='page'>
                <h2 className="H2">Tâches</h2>
                <h2 className="H2">Catégories</h2>
            </div>
        </div>
    )
}

export default Footer;