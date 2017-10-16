'use strict'

var BitX = require('bitx')
const { Pool, Client } = require('pg')

require('dotenv').config()

var bitx = new BitX()
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
})

const text = 'INSERT INTO test("hat") VALUES($1) RETURNING *'
const values = ['foo']

pool.query(text, values)
.then(res => {
  console.log(res.rows[0])
  // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
})
.catch(e => console.error(e.stack))

// try {
//   const text = 'INSERT INTO test("hat") VALUES($1) RETURNING *'
//   const values = ['foo']

//   const res = await pool.query(text, values)
//   console.log(res.rows[0])
//   // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
// } catch(err) {
//   console.log(err.stack)
// }


// (async () => {
//   // note: we don't try/catch this because if connecting throws an exception
//   // we don't need to dispose of the client (it will be undefined)
//   const client = await pool.connect()

//   try {
//     await client.query('BEGIN')
//     const { rows } = await client.query('INSERT INTO users(name) VALUES($1) RETURNING id', ['brianc'])
//     // const { rows } = await client.query('INSERT INTO test("hat") VALUES($1) RETURNING "id", "hat";', ['foo'])

//     // const insertPhotoText = 'INSERT INTO test("hat") VALUES ($1)'
//     // const insertPhotoValues = ['foo']
//     // const insertPhotoText = 'INSERT INTO photos(user_id, photo_url) VALUES ($1, $2)'
//     // const insertPhotoValues = [res.rows[0].id, 's3.bucket.foo']
//     // await client.query(insertPhotoText, insertPhotoValues)
//     await client.query('COMMIT')
//   } catch (e) {
//     await client.query('ROLLBACK')
//     throw e
//   } finally {
//     client.release()
//   }
// })().catch(e => console.error(e.stack))

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })

// const client = new Client()

// pool.connect()
//   .then(client => {
//     return client.query('SELECT * FROM test', [1])
//       .then(res => {
//         client.release()
//         console.log(res.rows[0])
//       })
//       .catch(err => {
//         client.release()
//         console.log(err.stack)
//       })
//   })

// await client.connect()

// bitx.getTicker(function (err, ticker) {
//   if (err) {
//     throw err
//   }
//   console.dir(ticker)
// })

// INSERT INTO "public"."test"("hat") VALUES('"tree"') RETURNING "id", "hat";

// const res = await client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res.rows[0].message) // Hello world!
// await client.end()