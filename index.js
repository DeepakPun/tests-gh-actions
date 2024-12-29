import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = 3000

const __filename = fileURLToPath(import.meta.url) // get the resolved path to the file
const __dirname = path.dirname(__filename) // get the name of the directory

app.use('/test', express.static(path.join(__dirname, 'test-report')))

app.get('/', (req, res) => {
	res.send(`
		Hello from express <br /> <br />
		<a href='/test' target='_blank'>Test results</a>
		`)
})

app.listen(port, () => console.log('Server is running'))
