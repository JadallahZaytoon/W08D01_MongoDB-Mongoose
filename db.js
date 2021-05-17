const mongoose = require("mongoose");

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true

}


mongoose.connect("mongodb://localhost:27017/db", options).then(
    () => {
      console.log("DB Ready To Use");
    },
    (err) => {
      console.log(err);
    }
  );