import Express, { response, urlencoded } from "express"
import path from "path"
import { fileURLToPath } from "url";
import axios from "axios"
import fs from "fs"
import dotenv from 'dotenv/config'

const app = Express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

// Body Parser Middleware
app.use(Express.json());
app.use(Express.urlencoded({extended: false}));

// Set static folder (disabled as dynamic assets are being used)
app.use(Express.static(path.join(__dirname, 'public')));

// ROUTES
app.get('/', (req, res) => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=' + `${process.env.secret}`)
    .then((response) => {
        console.log(response.data)
        const nasa = {
            title: response.data.title,
            date: response.data.date,
            type: response.data.media_type,
        }
        res.render('index.ejs', nasa)
    })
    console.log(process.env)
})

app.listen (PORT, () => console.log(`Server started on Port: ${PORT}`))