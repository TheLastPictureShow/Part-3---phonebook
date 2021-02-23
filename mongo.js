const mongoose = require("mongoose");

const password = process.argv[2];

const url = `mongodb+srv://Vlado:${password}@cluster0.sw9q8.mongodb.net/phonebook?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const entrySchema = new mongoose.Schema({
  name: String,
  number: Number,
});

const Entry = mongoose.model("Entry", entrySchema);

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

if (process.argv.length === 5) {
  const entry = new Entry({
    name: process.argv[3],
    number: process.argv[4],
  });

  entry.save().then((result) => {
    console.log(`Added ${entry.name} ${entry.number} to phonebook`);
    mongoose.connection.close();
  });
}

if (process.argv.length === 3) {
  Entry.find({}).then((entries) => {
    entries.forEach((el) => {
      console.log(el);
    });
    mongoose.connection.close();
  });
}
