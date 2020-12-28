// Variables
const movieList = document.querySelector('#film-list');
const buttons = Array.from(document.getElementsByTagName('input'));
const search = document.getElementById('search-field');
let filteredMovies = movies;

// Functions

// List movies
const addMoviesToDom = (films) => {
    removeFilm = Array.from(document.getElementsByTagName('li'));
    removeFilm.forEach(item => movieList.removeChild(item));
    let filmList = films.map(item => {
    let film = document.createElement('li');
    let link = attachLink(item.imdbID); 
    let poster = document.createElement('img');
    poster.setAttribute('src', item.Poster)
    link.appendChild(poster);
    film.appendChild(link);
    return film;
    });
    filmList.forEach(item => movieList.appendChild(item));
};

// Handle events
const handleOnChangeEvent = (event) => {
    switch (event.target.value){
        case '2014':
            filterLatestMovies();
            break;
        case 'avenger':
            filterMovies('avenger');
            break;
        case 'x-men':
            filterMovies('x-men');
            break;
        case 'princess':
            filterMovies('princess');
            break;
        case 'batman':
            filterMovies('batman');
        break;
        default:
            filterMovies(event.target.value);
    }
};

// Filter movies by title
const filterMovies = (wordInMovieTitle) => {
    filteredMovies = movies.filter(item => item.Title.toLowerCase().includes(wordInMovieTitle));
    addMoviesToDom(filteredMovies);
};

// Filter latest movies
const filterLatestMovies = () => {
    filteredMovies = movies.filter(item => parseInt(item.Year) >= 2014);
    addMoviesToDom(filteredMovies);
}

// attach link
const attachLink = (imdbID) => {
    let aHref = document.createElement('a');
    aHref.setAttribute('href', 'https://www.imdb.com/title/' + imdbID);
    return aHref;
};
// End functions


// Event listeners
const addEventListeners = () => {
    console.log('page loaded')
    buttons.forEach(item => item.addEventListener('change', e => handleOnChangeEvent(e)));
}


// Start script
addMoviesToDom(filteredMovies);
document.addEventListener('load', addEventListeners());
