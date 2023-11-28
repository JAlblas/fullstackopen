const express = require('express')
const app = express()
var morgan = require('morgan')

app.use(express.json())

morgan.token('body', req => {
    return JSON.stringify(req.body)
})

app.use(morgan(':method :url :body'))
//app.use(morgan('combined'))

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Phonebook API</h1>')
})

app.get('/info', (request, response) => {
    response.send(`Phonebook has info for ${persons.length} people.<br /><br />${Date()}`)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.post('/api/persons', (request, response) => {

    const newPerson = request.body

    if (!newPerson.name || !newPerson.number) {
        return response.status(400).json({
            error: 'name or number missing'
        })
    }

    const userExists = persons.some(person => person.name === newPerson.name);
    if (userExists) {
        return response.status(400).json({
            error: 'User already exists in phonebook'
        })
    } else {
        newPerson.id = Math.floor(Math.random() * 100000)
        persons = persons.concat(newPerson)
        response.json(newPerson)
    }
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})