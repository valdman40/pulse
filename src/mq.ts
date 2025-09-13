import amqp from "amqplib/callback_api";
import { config } from "./config.js";

export async function pingMq(): Promise<boolean> {
  return new Promise((resolve) => {
    amqp.connect(config.amqpUrl, (error0, connection) => {
      if (error0) {
        resolve(false);
        return;
      }

      connection.createChannel((error1, channel) => {
        if (error1) {
          connection.close();
          resolve(false);
          return;
        }

        const queue = 'pulse_health_check';
        channel.assertQueue(queue, { durable: false, autoDelete: true }, (error2) => {
          if (error2) {
            connection.close();
            resolve(false);
            return;
          }

          channel.close(() => {
            connection.close();
            resolve(true);
          });
        });
      });
    });
  });
}
