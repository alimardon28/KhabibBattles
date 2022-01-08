let elResult = document.querySelector('.movies__result');
let elList = document.querySelector('.movies__list');

elResult.textContent = movies.length;

for(let movie of movies){

    // CREATE
    let newItem = document.createElement('li');
    let newCard = document.createElement('div');
    let newImg = document.createElement('img');
    let newCardBody = document.createElement('div');
    let newCardTitle = document.createElement('h5');
    let newCardDate = document.createElement('p');
    let newCardRating = document.createElement('p');
    // let newCardText = document.createElement('p');
    let newCardLanguage = document.createElement('p');
    let newLinkMovies = document.createElement('a');

    // SET ATRIBUT
    newItem.setAttribute('class', 'movies__item mb-3');
    newCard.setAttribute('class', 'card movies__card');
    newImg.setAttribute('class', 'card-img-top');
    newImg.setAttribute('src', movie.smallThumbnail);
    newCardBody.setAttribute('class', 'card-body');
    newCardTitle.setAttribute('class', 'card-title');
    newCardDate.setAttribute('class', 'movies__date');
    newCardRating.setAttribute('class', 'movies__reting');
    // newCardText.setAttribute('class', 'card-text');
    newLinkMovies.setAttribute('class' , 'link fw-bold fs-5');
    newLinkMovies.setAttribute('href' , `https://www.youtube.com/watch?v=${movie.youtubeId}`);
    newLinkMovies.setAttribute('target' , '_blank');


    newCardTitle.textContent = movie.title;
    newCardDate.textContent = movie.year;
    newCardRating.textContent = movie.imdbRating;
    // newCardText.textContent = movie.summary;
    newCardLanguage.textContent = movie.language;
    newLinkMovies.textContent = "Click to view";


    elList.appendChild(newItem);
    newItem.appendChild(newCard);
    newCard.appendChild(newImg);
    newCard.appendChild(newCardBody);
    newCard.appendChild(newCardBody);
    newCardBody.appendChild(newCardTitle)
    newCardBody.appendChild(newCardDate)
    newCardBody.appendChild(newCardRating)
    newCardBody.appendChild(newCardLanguage)
    newCardBody.appendChild(newLinkMovies)
}