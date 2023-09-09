import mysql from "mysql"

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "123456",
    database: "dbPricingUpdate",
});

class Database {
    static initialize() {
        mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: "123456",
            database: "dbPricingUpdate",
        })
    }
}

export { Database }