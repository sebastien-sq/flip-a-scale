
    // Fonction pour mettre à jour le type d'altération sélectionné
    export default  function updateAccidentals(target, type){
    const selectedAccidentals = [""]; // tableau pour stocker le type d'altération sélectionné

      if(target.checked){
        selectedAccidentals.push(type);
      }
      else{
        selectedAccidentals.splice(selectedAccidentals.indexOf(type), 1);
      }
      console.log(selectedAccidentals);
      return selectedAccidentals;
    }
 
