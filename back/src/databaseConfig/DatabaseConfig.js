import mysql from "mysql"

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ,
    database: "dbPricingUpdate",
});

class Database {
    static initialize() {
        mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: ,
            database: "dbPricingUpdate",
        })
    }
}

export { Database }
