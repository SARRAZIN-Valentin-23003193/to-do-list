import {useState} from 'react';
import '../css/App.css';
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
}

  return (

    <>
    <Header taches={taches}/>
    <div className="App">
      <header className="App-header">
        <br/>
        <br/>
        {JSON.stringify(todos)}
        <br/>
        <br/>
        {
          taches && taches.map(t => <div>{t.title}</div>)
        }
        <button onClick={ajoutTaches}>Ajouter des tâches</button>
      </header>
    </div>
    <Footer />
    </>
  );
}

export default App;
