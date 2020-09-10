const fs = require('fs')

const data = fs.readFileSync('1-json.json')
// const dataj = JSON.parse()
// dataj.name = 'Sarthak'
// dataj.age = 20
// const fdata = JSON.stringify(dataj)
// fs.writeFileSync('1-json.json',fdata)
const databuf = data.toString()
const dataf = JSON.parse(databuf)
dataf.name = 'Sarthak'
dataf.age = 20
fs.writeFileSync('1-json.json',JSON.stringify(dataf))