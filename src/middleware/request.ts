import morgan from 'morgan';
import fs from 'fs';
import path from 'path';

const logDir = path.join(__dirname, '../../logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const accessLogStream = fs.createWriteStream(path.join(logDir, 'access.log'), { flags: 'a' });

const requestLogger = morgan('combined', { stream: accessLogStream });

export default requestLogger;
