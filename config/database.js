const mongoose = require("mongoose");


require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(
        process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    ).then(() => {
        console.log("DB connection established");
    }).catch((err) => {
        console.log("Could not connect to DB");
        console.error(err.message);
        process.exit(1);
    });
};

module.exports = dbConnect;
