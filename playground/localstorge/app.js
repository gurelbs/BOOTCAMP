let data = []
document.body.querySelector('button').addEventListener('click', (e) => {
    let p = document.createElement('p')
    data.push({
        fname: 'gurel',
        lname: 'ben shabat'
    })
    p.textContent = 'my name is gurel ben shabat'
    document.body.appendChild(p)
})