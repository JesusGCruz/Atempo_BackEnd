import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// Arreglar el problema de las importaciones (no encuentra el archivo)
import babyItemRoutes from './presentation/routes/BabyItemRoutes';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'API para gestión de compras del bebé',
    status: 'running',
    version: '1.0.0'
  });
});

// Rutas de productos
app.use('/api/items', babyItemRoutes);

app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Ruta no encontrada'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}/api/items/`);
});