import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import webRoutes from './routes/web';
import apiRoutes from "./routes/api";
import {apiKeyMiddleware} from "./middleware/apikey";


dotenv.config();

const app = express();
app.use(express.json());

// Logging Middleware
app.use(async (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const now = new Date().toISOString();
  console.log(`[${now}] ⏳ ${req.method} ${req.originalUrl} - Started`);

  res.on('finish', () => {
    const duration = Date.now() - start;
    const status = res.statusCode;
    const outcome = status >= 400 ? '❌ ERROR' : '✅ SUCCESS';

    console.log(
      `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - ${outcome} (${status}) - ${duration}ms`
    );
  });

  next();
});

// Routes
app.use('/', webRoutes); 
app.use("/api", apiKeyMiddleware, apiRoutes);


app.use((req: Request, res: Response) => {
  res.status(404).json({
    code: 404,
    message: '❌ ERROR: Route not found',
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
