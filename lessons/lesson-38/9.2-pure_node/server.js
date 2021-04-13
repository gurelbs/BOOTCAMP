const http = require('http')
const fs = require('fs')
const url = require('url')
let data = [
    {name: 'gurel', id: 1},
    {name: 'shilo', id: 2},
    {name: 'meitav', id: 3},
]
if (!fs.existsSync('users.json')) {
    fs.writeFileSync('users.json',JSON.stringify(data))
}

const server = http.createServer((req,res) => {
    if (req.method !== 'GET') {
        res.end(http.STATUS_CODES[405])
    } else {
        switch (req.url) {
            case '/raw-html':
                res.writeHead(200, {
                    "Content-type": "text/html"
                })
                res.end('<h1>Welcome</h1>')
                break;
            case '/users':
                res.writeHead(200, {
                    "Content-type": "application/json"
                })
                res.end(fs.readFileSync(__dirname+'/public/users.json'))
                break;
            case '/':
                res.writeHead(200, {
                    "Content-type": "text/html"
                })
                res.end(fs.readFileSync(__dirname+'/public/index.html'))
                break;
            case '/style.css':
                res.writeHead(200, {
                    "Content-type": "text/css"
                })
                res.end(fs.readFileSync(__dirname+'/public/style.css'))
                break;
            case '/index.js':
                res.writeHead(200, {
                    "Content-type": "text/javascript"
                })
                res.end(fs.readFileSync(__dirname+'/public/index.js'))
                break;
            default:
                res.end()
                break;
        }
    }
    let path = url.parse(req.url,true)
    if (path === ''){
        path = 'index.html'
    }
})

const port = 3000 || process.env.port
server.listen(port, () => console.log(`server run at http://localhost:${port}`))