const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// get driver connection
const dbo = require("./db/conn");
 
app.get("/", (req, res) => {
    dbo.getDb().collection("oracin").find({}).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    }
    );
});

app.get("/addproducts", (req, res) => {

    const myobj = [{ name: "Patate",price: 4,quantity:10, address: "Highway 37" },
    { name: "Carote",price: 3,quantity:5, address: "Highway 37" },
    { name: "Cipolle",price: 2,quantity:5, address: "Highway 37" },
    { name: "Zucchine",price: 1,quantity:7, address: "Highway 37" },
    { name: "Melanzane",price: 2,quantity:2, address: "Highway 37" },
    { name: "Pomodori",price: 3,quantity:3, address: "Highway 37" },
];
    
    dbo.getDb().collection("oracin").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
      }
    );
});

app.get("/clearproducts", (req, res) => {
    dbo.getDb().collection("oracin").deleteMany({}, function(err, obj) {
        if (err) throw err;
        console.log(" document(s) deleted");
        }
    );
});

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});