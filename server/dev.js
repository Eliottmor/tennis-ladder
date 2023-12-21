const app = require('./src/index')
const consola = require('consola')
const dotenv = require('dotenv')

const port = process.env.PORT || 4000

dotenv.config()

app.listen(port, () => consola.info(`Server started on ${port}`))