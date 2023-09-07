const { express, routes } = require('./controller/controller');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const path = require('path')
const app = express();
app.use(express.json());
app.use(express.static('./static'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
routes.get('/', (req,res )=>{
    res.sendFile(path.resolve(__dirname, './static/index.html'))
})
app.listen(3080, () => console.log('Server running at http://localhost:3080'));