import '../css/App.css';
import {useState} from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import todos from '../json/list.json';
import Form from './Form.js';


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
      <Form />
    </div>
    <Footer ajout={ajoutTaches}/>
    </>
  );
}

export default App;
