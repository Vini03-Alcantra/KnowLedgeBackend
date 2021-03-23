const app = require('express')()
const consign = require('consign')

consign()
    .then('./config/middleware.js')
    .into(app)

app.listen(3000, () => {
    console.log("Backend executando... ")
})