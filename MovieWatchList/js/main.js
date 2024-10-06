let movies = [];

function addMovie() {
    //Get movie element
    let movie = document.getElementById('movie-name').value;
    //Add movie to array
    movies.push(movie);
}


function display() {
    document.getElementById('movie-name').innerHTML = '';
    document.getElementById('movie-list').innerHTML = '';
    let list = document.getElementById('movie-list');
    for (let i = 0; i < movies.length; i++) {
        list.insertAdjacentHTML("beforeend",
            `<li class="collection-item movie-title">
                <i class="material-icons">movie</i>${movies.at(i)}
                <button id="remove-btn">
                    <i class="material-icons">delete</i>
                </button>
               </li>` );
    }
}


function removeMovie(movie) {
    let updatedMovies = [];
    for (let i = 0; i < movies.length; i++) {
        if (movies[i] !== movie) {
            updatedMovies.push(movies[i]);
        }
    }
    movies  = updatedMovies;

}

document.getElementById('add-movie-btn').addEventListener('click', function(){
    addMovie();
    display();
});

if(movies.length > 0) {
    document.getElementById('remove-btn').addEventListener('click', function() {
        console.log(movies);
        // if (e.target.closest('#remove-btn')) {
        //     const movieName = e.target.closest('li').textContent.trim();
        //     console.log(movieName);
        //     removeMovie(movieName);
        // }
        display();
    });
}










