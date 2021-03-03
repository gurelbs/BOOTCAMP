let userSearch = document.querySelector('input[type="text"]')
let movieDontFound = document.querySelector('.movie-dont-found')
let card = document.querySelector('.card')
let api = `http://www.omdbapi.com/?i=tt3896198&apikey=9883200a&`

const handleUserSearch = e => {
    let userValue = e.target.value
    if (e.key === 'Enter'){
        fetch(`${api}t=${userValue}`)
        .then(res => res.json())
        .then(data => {
            if (data.Response === 'False' || data.Poster === 'N/A'){
                movieDontFound.textContent = data.Error
                card.innerHTML = ''
                userSearch.value = ''
            } 
            if (data.Poster === 'N/A'){
                movieDontFound.textContent = `Poster not Found`
                card.innerHTML = ''
                userSearch.value = ''
            } else {
                let ratings = []
                data.Ratings.forEach(rate => {
                    ratings.push(`<p class="rate">${rate.Source} rate: <span class="rate-score">${rate.Value}</span><br></p>`)
                });
                movieDontFound.textContent = ''
                card.innerHTML = `
                <img src="${data.Poster}" class="movie-img">
                <div class="details">
                    <h1>${data.Title}</h1>
                    <p class="genre">${data.Genre} <span class="year">${data.Year}</span></p>
                    <p class="plot">${data.Plot}</p>
                    <p class="director">Director by ${data.Director}</p>
                    <p class="actors">Actors:<br> ${data.Actors}</p>
                    <div>${ [...ratings].join('') }</div>
                </div>`
                
                userSearch.value = ''
                console.log(data.Poster);
            }
        })
    }
}
userSearch.addEventListener('keyup', e => handleUserSearch(e))