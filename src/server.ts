import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

//pré-configurado com dotenv
dotenv.config();
//pré-configurado servidor
const server = express();
//pré-configurado o mustache, tudo setado
server.set('view engine','mustache');
server.set('views',path.join(__dirname,'views'));
server.engine('mustache', mustache());
//e nossa pasta publica, estatica, está configurada para rodar
server.use(express.static(path.join(__dirname, '../public')))

//Rotas
server.use(mainRoutes);

server.use((req,res)=>{
    res.send('Página Não Encontrada!')
});

server.listen(process.env.PORT);