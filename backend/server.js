import app from './app.js';
import connectDB from './config/db.js';
import { PORT } from './config/utils.js';
import { connectToRedis } from './services/redis.js';

const port = PORT || 5000;

async function startServer() {
  try {
    await connectDB();
    await connectToRedis();

    app.listen(port, '0.0.0.0', () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Server startup failed:', error.message);
    process.exit(1);
  }
}

startServer();

export default app;
