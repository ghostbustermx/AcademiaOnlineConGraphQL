import express from 'express';
import compression from 'compression';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(compression());

app.get('/', (req, res) => {
    res.send('Hola a la academia online en GraphQL');
});


const PORT = 3200;

app.listen(
    {
        port: PORT
    },
    () => console.log(`Servidor academia online listo http://localhost:${PORT}`)
);