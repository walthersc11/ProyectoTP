import mysql from 'serverless-mysql'

export const conn = mysql({
    config: {
        host: 'localhost',
        user: 'root',
        password: 'User2024$',
        port: 3306,
        database: 'dbproyecto'
    }
})