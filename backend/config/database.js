const mongoose = require("mongoose"); // eslint-disable--line

const Database = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    });
    console.log("Connection Sucessful to database");
  } catch (err) {
    return console.log(err);
  }
};

module.exports = Database; // Forget to use export default function
