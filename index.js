const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

app.use(express.static("build"));
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

let persons = [
  {
    name: "Alex Verona",
    number: "1234",
    id: 1,
  },
  {
    name: "Brian De Palma",
    number: "2345",
    id: 2,
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  const dateIs = new Date().toString();
  response.send(
    `<h3>Phonebook has info for ${persons.length} people.</h3>
     <p>The time and date is: ${dateIs}</p>`
  );
});

// This is how we fetch a single entry:
app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const entry = persons.find((el) => el.id === id);
  if (entry) {
    response.json(entry);
  } else {
    response.status(404).end();
  }
});

// This is how we delete a single entry:
app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((el) => el.id !== id);
  response.status(204).end();
});

// This is how we add a new entry:
app.post("/api/persons", (request, response) => {
  const entry = request.body;
  entry.id = Number((Math.random() * 1000).toFixed(2));

  if (!entry.name) {
    return response.status(400).json({
      error: "Name missing",
    });
  }

  if (!entry.number) {
    return response.status(400).json({
      error: "Number missing",
    });
  }

  let exists = persons.map((el) => el.name);
  if (exists.includes(entry.name)) {
    return response.status(400).json({
      error: "Name must be unique",
    });
  }
  persons = persons.concat(entry);
  response.json(persons);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
