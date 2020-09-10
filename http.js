const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=72430a409c13e8b75c5c38c40edd79c0&query=40,-75'
const request = http.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data += chunk.toString()
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.end()