const db = require('../../data/dbConfig')

function find() {
    return db('users')
}

function findById(id) {
    return db('users')
    .where('id', id)
    .first()
}

async function add(user) {
    const id = await db('users').insert(user)
    return findById(id)
}

function validatePassword(password) {
    return db('users')
    .where('password',password)
}

function findByUsername(username) {
    return db('users')
    .where('username',username)
}

module.exports = {
    find, 
    findById,
    validatePassword,
    findByUsername,
    add
}