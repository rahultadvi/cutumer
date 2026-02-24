// import dotenv from "dotenv";
// import { dot } from "node:test/reporters";
// import pkg from "pg";
// const { Pool } = pkg;
// dotenv.config();

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: 5432,
// });

// pool.connect()
//   .then(client => {
//     console.log("✅ PostgreSQL Database connected successfully");
//     client.release();   // connection free
//   })
//   .catch(err => {
//     console.log("❌ PostgreSQL connection error", err);
//   });

// export default pool;