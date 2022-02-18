import Express, { response, urlencoded } from "express"
import path from "path"
import { fileURLToPath } from "url";
import axios from "axios"
import fs from "fs"
import { nextTick } from "process";
import expressLayouts from "express-ejs-layouts";

const app = Express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

// Body Parser Middleware
app.use(Express.json());
app.use(Express.urlencoded({extended: false}));

// Set static folder (disabled as dynamic assets are being used)
app.use(Express.static(path.join(__dirname, 'public')));

let myCss  ={
    style : fs.readFileSync('./public/css/style.css', 'utf8')
};

// ROUTES
app.get('/', (req, res) => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then((response) => {
        console.log(response.data)
        const nasa = {
            title: response.data.title,
            date: response.data.date,
            type: response.data.media_type,
        }
        res.render('index.ejs', nasa)
    })
})

app.listen (PORT, () => console.log(`Server started on Port: ${PORT}`))