const mongoose = require("mongoose");
require("dotenv").config();

exports.dataConnection = () => {
     mongoose.connect(
          process.env.database,
          {
               useCreateIndex: true,
               useNewUrlParser: true,
               useUnifiedTopology: true,
               retryWrites: false,
          },
          (err) => {
               if (err) console.log(err);
               else console.log("connected to mlab");
          }
     );
};
