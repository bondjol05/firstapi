import express from 'express'
const app = express()
const port = 3000;

app.get('/', (req, res) => res.send('Hallo world!'))
app.listen(port, () => console.log('server running on port 3000'))
