const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'user',
  host: 'localhost',
  database: 'outline',
  password: 'pass',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  user: 'user',
  host: 'localhost',
  database: 'outline',
  password: 'pass',
  port: 5432,
})

client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})
