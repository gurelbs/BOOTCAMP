let $ = x => document.querySelector(x)
let container = $('.container')
let userInput = $("#input")
let githubApi = `https://api.github.com/users/`
let notFound = document.createElement('p')
notFound.classList.add('not-found')
let arrOfSearch = []
userInput.addEventListener('keypress', e => {
    if (e.key === 'Enter'){
        let userType = e.target.value
        fetch(`${githubApi}${userType}`)
        .then(res => res.json())
        .then(data => {
            if (data.login){
                    if (!arrOfSearch.includes(userType)){
                    let card = document.createElement('div')
                    card.classList.add(`${data.login}`)
                    card.innerHTML = `<a class="card" href="https://github.com/${userType}">
                        <img src=${data.avatar_url} class="userImg" alt="github user avatar">
                        <p class="userName">${data.login}</p>
                        <p class="public-repos">public repos: ${data.public_repos}</p>
                    </a>`
                    container.appendChild(card)
                    arrOfSearch.push(userType)
                    notFound.textContent = ''
                    userInput.value = ''
                }
            } else {
                notFound.textContent = 'user Not Found'
                userInput.insertAdjacentElement('afterend',notFound)
                userInput.value = ''
            }
        })
    }
})