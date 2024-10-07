let movies = [];

function addMovie() {
    //Get movie element
    let movie = document.getElementById('movie-name').value;
    //Add movie to array
    if (movie) {
        movies.push(movie);
    }
}


function display() {
    document.getElementById('movie-name').innerHTML = '';
    document.getElementById('movie-list').innerHTML = '';
    let list = document.getElementById('movie-list');
    for (let i = 0; i < movies.length; i++) {
        list.insertAdjacentHTML("beforeend",
            `<li class="collection-item movie-title">
                <i class="material-icons teal-text">movie</i>${movies.at(i)}
                <button class="remove-btn white" type="button" onclick="removeMovie('${movies.at(i)}')">
                    <i class="material-icons">delete</i>
                </button>
               </li>` );
    }
}


function removeMovie(movie) {
    movies.splice(movies.indexOf(movie), 1);
    display();
}

document.getElementById('add-movie-btn').addEventListener('click', function(){
    addMovie();
    display();
});










