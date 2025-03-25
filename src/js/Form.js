import '../css/Form.css';

const Form = () => {
    function recupDonnee(e) {
        const form = e.target;
        const formData = new FormData(form);
    
        fetch('/some-api', { method: form.method, body: formData });
    
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
      }

    function cacheForm() {
        const O_formulaire = document.getElementById("f");
        O_formulaire.setAttribute("class", "cache")
    }
    return (
        <form id="f" method="post" onSubmit={recupDonnee} className='formulaire'>
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
    );
}

export default Form;