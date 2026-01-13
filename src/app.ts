import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import babyItemRoutes from './presentation/routes/BabyItemRoutes';

dotenv.config();

const app: Application = express();

// Settings
app.disable('x-powered-by');
app.set("port", process.env.PORT || 3000);


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas de productos
app.use('/items', babyItemRoutes);

// Ruta default
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Ruta no encontrada'
  });
});

export default app;