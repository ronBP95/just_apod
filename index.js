import Express, { urlencoded } from "express"
import path from "path"
import { fileURLToPath } from "url";
import axios from "axios"

const app = Express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

// Body Parser Middleware
app.use(Express.json());
app.use(Express.urlencoded({extended: false}));

// Set static folder
app.use(Express.static(path.join(__dirname, 'public')));

// ROUTES
axios.get ('/api/wow')
    .then(function (response) {
        //handle success
        console.log("success")
    })
    .catch(function (error) {
        console.log("failure")
    })
    .then(function() {
        console.log("this is where it executes")
    })
//

app.listen (PORT, () => console.log(`Server started on Port: ${PORT}`))