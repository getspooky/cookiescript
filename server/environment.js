import path from 'path';
import env from 'dotenv';

// Load environment variables from .env file
env.config({
  encoding: 'utf8',
  path: path.resolve(__dirname, '../.env'),
});
