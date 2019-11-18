const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./router/routes')

//DBConfig
require('./system/dbConfig');



app.use(cors())
app.use(bodyParser.urlencoded({ extended: true, limit: "20mb" }));
app.use(bodyParser.json({ limit: "20mb" }));

app.use("/java", router)


app.listen(PORT, "0.0.0.0", () => {
    console.log("Server is running in PORT..," + PORT)
})