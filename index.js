require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const Entry = require("./models/entry");

app.use(express.static("build"));
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

// This is how we fetch all entries from the database (MongoDB):
app.get("/api/persons", (request, response) => {
  Entry.find({})
    .then((entries) => {
      response.json(entries);
    })
    .catch((error) => next(error));
});

// This is how we get some info about the app:
app.get("/info", (request, response) => {
  Entry.find({})
    .then((entries) => {
      response.send(
        `<h3>The phonebook has info for ${entries.length} people</h3>
      <p>The time and date is: ${new Date().toString()}</p>`
      );
    })
    .catch((error) => next(error));
});

// This is how we fetch a single entry from the database:
app.get("/api/persons/:id", (request, response) => {
  Entry.findById(request.params.id)
    .then((entry) => {
      console.log("entry is", entry);
      response.json(entry);
    })
    .catch((error) => next(error));
});

// This is how we delete a single entry:
app.delete("/api/persons/:id", (request, response) => {
  Entry.findByIdAndRemove(request.params.id)
    .then((entry) => {
      console.log("deleted entry is", entry.name);
      response.status(204).end();
    })
    .catch((error) => next(error));
});

// This is how we add a new entry:
app.post("/api/persons", (request, response, next) => {
  const body = request.body;

  if (!body.name) {
    return response.status(404).json({ error: "name missing" });
  }

  if (!body.number) {
    return response.status(404).json({ error: "number missing" });
  }

  const entry = new Entry({
    name: body.name,
    number: body.number,
  });

  entry
    .save()
    .then((savedEntry) => {
      response.json(savedEntry);
      console.log("savedEntry is:", savedEntry);
      console.log("Entry creation successful");
    })
    .catch((error) => next(error));
});

const errorHandler = (error, request, response, next) => {
  console.error(
    "Error! Error Name:",
    error.name,
    "Error Message:",
    error.message
  );

  if (error) {
    return response.status(400).send(error.message);
  }
  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
