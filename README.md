# Pulse

**Pulse** — learning project to explore distributed systems by building a message scheduling & delivery backend (Node.js + RabbitMQ + PostgreSQL).

---

## 🎯 Goal

This project is not meant for production.  
It’s a **Minimum Viable Learning (MVL)** app designed to practice:

- Message queues (RabbitMQ)
- Reliable event publishing (Outbox pattern)
- Scheduling (delayed + recurring jobs)
- Retries with exponential backoff
- Dead-letter queues
- Database integration with PostgreSQL
- Idempotent APIs
- Logging & observability basics

---

## 🛠️ Tech Stack

- **Node.js + TypeScript** (backend)
- **Fastify** (HTTP server)
- **Zod** (schema validation)
- **PostgreSQL** (storage)
- **RabbitMQ** (queue broker)
- **Pino** (logging)
- **Docker Compose** (local setup)

---