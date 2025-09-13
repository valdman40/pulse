import 'dotenv/config';

export const config = {
  port: Number(process.env.PORT ?? 3000),
  dbUrl: process.env.DATABASE_URL!,
  amqpUrl: process.env.RABBITMQ_URL!,
};