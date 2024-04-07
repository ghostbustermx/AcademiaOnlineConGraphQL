import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';
import expressPlayGround from 'graphql-playground-middleware-express';

const app = express();

app.use(cors());
app.use(compression());

const servidor = new ApolloServer ({
    schema,
    introspection: true
});


servidor.applyMiddleware({ app });


app.get('/', expressPlayGround ({
    endpoint: '/graphql'
}));


const PORT = 3200;

app.listen(
    {
        port: PORT
    },
    () => console.log(`Servidor academia online listo http://localhost:${PORT}`)
);