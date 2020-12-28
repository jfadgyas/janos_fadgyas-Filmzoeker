// Variables
const movieList = document.querySelector('#film-list');
const buttons = Array.from(document.getElementsByTagName('input'));
const search = document.getElementById('search-field');
let filteredMovies = movies;

// Functions

// List movies
const addMoviesToDom = (films) => {
    let filmList = films.map(item => {
    let film = document.createElement('li');
    let link = document.createElement('a');
    link.setAttribute('href', 'https://www.imdb.com/title/' + item.imdbID);
    let poster = document.createElement('img');
    poster.setAttribute('src', item.Poster)
    link.appendChild(poster);
    film.appendChild(link);
    return film;
    });
    filmList.forEach(item => movieList.appendChild(item));
};

const filterMovies = (field, filterValue) => {
    if (field == 'Year'){
        filteredMovies = movies.filter(item => item.Year >= filterValue);
    }
    else {
        filteredMovies = movies.filter(item => item.Title.toLowerCase().includes(filterValue));
    }
    removeFilm = Array.from(document.getElementsByTagName('li'));
    removeFilm.forEach(item => movieList.removeChild(item));
    addMoviesToDom(filteredMovies);
};


// Event listeners
buttons.forEach(item => item.addEventListener('change', (e) => filterMovies(e.target.id, item.value)));


// Start script
addMoviesToDom(filteredMovies);
