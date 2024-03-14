import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { dbConnection } from './mongo.js';
import userRoutes from '../src/user/user.routes.js';
import categoriaRoutes from '../src/categoria/categoria.routes.js';
export default class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
       
        this.conectarDB();
        this.middlewares();
        this.routes();
    }

    conectarDB() {
        // Conexión a la base de datos
        dbConnection();
    }

    middlewares() {
        // Configuración de middlewares
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
    }

    routes() {
        // Configuración de rutas
        this.app.use('/api/users', userRoutes); // Monta las rutas de usuario en la ruta base /api/users
        this.app.use('/api/categorias', categoriaRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}
