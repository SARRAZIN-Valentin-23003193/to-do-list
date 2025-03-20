import '../css/Header.css';

const Header = ({ taches = [] }) => {
    const nbTaches = taches.length;
    return (
        <div className='Header'>
            <h1 className='H1'>Tâches : {nbTaches}</h1>
        </div>
    );
}

export default Header;