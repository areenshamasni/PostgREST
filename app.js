const express = require('express');
const path = require('path');
const { exec } = require('child_process');
const { Pool } = require('pg');
require('dotenv').config();

const postgresProcess = exec('postgrest postgrest.conf');

postgresProcess.stdout.on('data', (data) => {
  console.log(`PostgREST stdout: ${data}`);
});

postgresProcess.stderr.on('data', (data) => {
  console.error(`PostgREST stderr: ${data}`);
});

postgresProcess.on('close', (code) => {
  console.log(`PostgREST process exited with code ${code}`);
});

const app = express();
const port = 3003;

const pool = new Pool({
  connectionString: process.env.DB_URI,
});

const createUsersTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
  );
`;

const createPostsTableQuery = `
  CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
  );
`;

async function executeQueries() {
  const client = await pool.connect();
  try {
    await client.query(createUsersTableQuery);
    await client.query(createPostsTableQuery);
    console.log('Tables created successfully.');
  } catch (error) {
    console.error('Error creating tables:', error);
  } finally {
    client.release();
  }
}

executeQueries();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
  response.render('index.html');
});

app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`);
});
