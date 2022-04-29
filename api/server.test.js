
// Write your tests here
const request = require('supertest')
const server = require('./server')
const db = require('../data/dbConfig')


test('make sure our environment is set correctly', () => {
  expect(process.env.NODE_ENV).toBe('testing');
});

describe('[POST] /register', () => {  
  
  test('The user is shown an error if they do not enter a username', async () => {
   const res = await request(server)
    .post('/api/auth/register').send({
      username: '', 
      password: 'password123',
   })
     expect(res.body).toMatchObject({})
})

test('The user is shown an error if they do not enter a password', async () => {

  const res = await request(server)
    .post('/api/auth/register').send({
      username: 'benjammin', 
      password: '',
  })
    expect(res.body).toMatchObject({})
  })

})

describe('POST /login', () => {
  test('The user is show an error if they do not enter a username', async () => {
    const res = await request(server).post('/login').send({
      username:'',
      password:'password123'
    })
    expect(res.status).toBe(404)
  })
})
test('The user is show an error if they do not enter a password', async () => {
  const res = await request(server).post('/login').send({
    username:'benjammin',
    password:''
  })
  expect(res.status).toBe(404)
})

