async function fetchData(apiUrl,sectionId ) {
    try{  //try = prendere i dati 
      let response = await fetch(apiUrl); // i dati nell'api del url
      let data = await response.json(); // lo trasforma in arrray
      let container = document.getElementById(sectionId); // seleziona l'id della sezione
      let addAlbums = {};
  
  
      // creazione card
      data.data.forEach((song) => {
        if (!addAlbums[song.album.id]){
          let card = `
          <div class="col mb-4">
          <div class="card">
            <img src="${song.album.cover_medium}" class="card-img-top img-fluid" alt="${song.album.title}">
            <div class="card-body">
              <h5 class="card-title">${song.album.title}</h5>
              <p class="card-text">${song.artist.name}</p>
              <p class="card-text">${song.album.title}</p>
            </div>
          </div>
        </div>
          `
          container.innerHTML += card;
          addAlbums[song.album.id] = true;
          // console.log(addAlbums)
        }
      });
  
      //inserire errore prima della chiusura
    } catch(error){
      console.error("abbiamo trovato un errore ", error)
    }                          
  }
  
  // struttura del DOM dopo il caricamento della pagina 
  document.addEventListener('DOMContentLoaded', () => {  // => Arrow function expressions
    fetchData(`https://striveschool-api.herokuapp.com/api/deezer/search?q=pinguini%20tattici%20nucleari` , "pinguiniSection" )
    fetchData(`https://striveschool-api.herokuapp.com/api/deezer/search?q=maneskin` , "maneskinSection" )
    fetchData(`https://striveschool-api.herokuapp.com/api/deezer/search?q=mahmood` , "mahmoodSection" )
  
  })
  
  
  function  tuttiAlbum() {
    let allTitoli = []
    let titoli = document.querySelectorAll('.card-title')
    for (let i = 0; i < titoli.length; i++) {
      let risultato = titoli[i].textContent.trim()
      allTitoli.push(risultato)
    }
    console.log("vedo ", allTitoli);
  
    let modal = document.querySelector('.modal-body')
    for (let i = 0; i < allTitoli.length; i++) {
    let pTitoli = document.createElement('p')
      pTitoli.textContent = allTitoli[i] //textContent inserisce il contenuto in html
      modal.appendChild(pTitoli)
    }
  }
  