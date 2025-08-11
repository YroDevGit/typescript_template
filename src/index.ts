import {register} from 'tsconfig-paths';
import * as tsConfig from '../tsconfig.json';

register({
  baseUrl: tsConfig.compilerOptions.outDir, 
  paths: tsConfig.compilerOptions.paths,
});

import dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response, NextFunction } from 'express';
import webRoutes from '@/routes/web';
import {apiKeyMiddleware} from "@/middleware/apikey";
import cors from "cors";


const app = express();

/*app.use(cors({
  origin: ["https://yourfrontend.com"],
  credentials: true,
}));*/

app.use(cors());

app.use(express.json());

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

// Routes here....
app.use('/', webRoutes); 


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
