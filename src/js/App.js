import '../css/App.css';
import {useState} from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import todos from '../json/list.json';


function App() {
  const [currentTodos, setCurrentTodos] = useState(todos)
  const taches = currentTodos.taches

  const ajoutTaches = () => {
    const tache = {
        id:111, title: "Nouvelle tâche"
    }
    const newTodos = {
        ...currentTodos, taches: [
      ...currentTodos.taches,
      tache
      ]
    }
  setCurrentTodos(newTodos)
  viewForm();
  }

  function recupDonnee(e) {
    const form = e.target;
    const formData = new FormData(form);

    fetch('/some-api', { method: form.method, body: formData });

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  function viewForm() {
    const O_formulaire = document.getElementById("f");
    O_formulaire.setAttribute("class", "formulaire");
  }

  return (
    <>
    <Header taches={taches}/>
    <div className="App">
      <header className="App-header">
        <br/>
        <br/>
        {
          taches && taches.map(t => <div className='tache'>{t.title} <br/> {t.description}, {t.date_creation}, {t.date_echeance}, {t.etat}, {t.urgent}</div>)
        }
      </header>
      <form id="f" method="post" onSubmit={recupDonnee} class='cache'>
        <label>
          Titre de votre tâche: <input name="titre" defaultValue="Votre titre" />
        </label>
        <hr />
        <label>
          Description de votre tâche: <input name="description" defaultValue="Votre description" />
        </label>
        <hr />
        <label>
          Indiquez la date d'échéance: <input type="date" name="date_echeance" />
        </label>
        <hr />
        <p>
          Choisissez l'état de votre tâche:
          <select name='etat'>
            <option value="Nouveau">Nouveau</option>
            <option value="En cours">En cours</option>
            <option value="Réussi">Réussi</option>
            <option value="En attente">En attente</option>
            <option value="Abandonné">Abandonné</option>
          </select>
        </p>
        <hr />
        <label>
          Tâche urgente: <input type="checkbox" name="urgent" />
        </label>
        <hr />
        <button type="reset">Abandonner les modifications</button>
        <button type="submit">Envoyer le formulaire</button>
      </form>
    </div>
    <Footer affiche={ajoutTaches}/>
    </>
  );
}

export default App;
