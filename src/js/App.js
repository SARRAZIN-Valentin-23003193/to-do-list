import '../css/App.css';
import {useState} from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import todos from '../json/list.json';


function App() {
  const [currentTodos, setCurrentTodos] = useState(todos)
  const taches = currentTodos.taches

  function handleChange() {
    let form = document.getElementById('f')

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      let titre = document.getElementById('titre');
      let description = document.getElementById('description');
      let date_creation = new Date().toISOString().split("T")[0];
      let date_echeance = document.getElementById('date_echeance');
      let etat = document.getElementById('etat');
      let urgent = document.getElementById('urgent');

      const tache = {
        title: titre, description: description, date_creation: date_creation, date_echeance: date_echeance, etat: etat, urgent: urgent
      }
      const newTodos = {
        ...currentTodos, taches: [...currentTodos.taches, tache]
      }
    setCurrentTodos(newTodos)
    })
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
        <div className='taches'>
        {
          taches && taches.map(t => <div className='tache'>{t.title} <br/> {t.description}, {t.date_creation}, {t.date_echeance}, {t.etat}, {t.urgent}</div>)
        }
        </div>
      </header>
      <form id="f" method="post" class='cache' action={handleChange}>
        <label>
          Titre de votre tâche: <input id="titre" name="titre" defaultValue="Votre titre" />
        </label>
        <hr />
        <label>
          Description de votre tâche: <input id="description" name="description" defaultValue="Votre description" />
        </label>
        <hr />
        <label>
          Indiquez la date d'échéance: <input id="date_echeance" type="date" name="date_echeance" />
        </label>
        <hr />
        <p>
          Choisissez l'état de votre tâche:
          <select id="etat" name='etat'>
            <option value="Nouveau">Nouveau</option>
            <option value="En cours">En cours</option>
            <option value="Réussi">Réussi</option>
            <option value="En attente">En attente</option>
            <option value="Abandonné">Abandonné</option>
          </select>
        </p>
        <hr />
        <label>
          Tâche urgente: <input id="urgent" type="checkbox" name="urgent" />
        </label>
        <hr />
        <button type="reset">Abandonner les modifications</button>
        <button type="submit">Envoyer le formulaire</button>
      </form>
    </div>
    <Footer affiche={viewForm}/>
    </>
  );
}

export default App;
