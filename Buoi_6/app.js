const movieAPI = "https://6739e79ea3a36b5a62eff581.mockapi.io/films"
const movieList = document.querySelector(".movie-list")

async function getMovieList() {
    try {
        let response = await fetch(movieAPI)
        let movieList = await response.json()
        renderMovieList(movieList)
    } catch (error) {
        console.log("CALL API ERROR", error)

    }
}

function renderMovieList(movies) {
    let html = "";
    for (let i = 0; i < movies.length; i++) {
        html += `
            <div class="movie-item">
                <img src="${movies[i].image_path}">
                <h5 class="movie-name">${movies[i].name}</h5>

            </div>
        `
        
    }    
    movieList.innerHTML = html
}

getMovieList()