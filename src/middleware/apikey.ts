import { Request, Response, NextFunction } from 'express';
import ApiKey from '../models/ApiKey';

export const apiKeyMiddleware = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
  const clientKey = req.headers['apikey'];

  if (!clientKey || typeof clientKey !== 'string') {
    return res.status(403).json({ code: 403, message: 'Missing or invalid API key' });
  }

  try {
    const apiKey = await ApiKey.findOne({ where: { apikey: clientKey } });

    if (!apiKey) {
      return res.status(403).json({ code: 403, message: 'Unauthorized API key' });
    }

    next();
  } catch (err) {
    return res.status(500).json({ code: 500, message: 'Server error', error: err });
  }
};
