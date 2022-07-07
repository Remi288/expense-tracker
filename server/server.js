const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config({ path:"./config.env" });

const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(require('./routes/route'));

// Connect to the database
const conn = require('./db/connection');

conn.then(db =>{
    if(!db) return process.exit(1)

    // Listen to the http server
    app.listen(port, () =>{
         console.log(`Server started on port: http://localhost:${port}`)
});
    // Error connecting to http server
    app.on("error", (err) =>
      console.log("Failed To Connect with HTTP Server: ", err)
    );
    // error in mongoose database
}).catch(error => {
    console.log(`Connection Failed: ${error}`);
})




