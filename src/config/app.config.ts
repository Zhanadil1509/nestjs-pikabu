import { registerAs } from '@nestjs/config';
import * as process from 'node:process';

export default registerAs('config', () => ({
  port: parseInt(process.env.PORT, 10) || 5000,
  nodenv: process.env.NODE_ENV,
}));
