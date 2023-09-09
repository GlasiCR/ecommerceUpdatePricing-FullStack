import { db } from "../../databaseConfig/DatabaseConfig.js";

class ProductsRepository{
    constructor(model, db){
        this.model = model
        this.db = db
    }

    async updateNewProductsPrice(code, sales_price){
        
        db.connect(function (err){
            if (err) throw err

            const myQuery = `
                UPDATE products
                SET sales_price = ?
                WHERE code = ?;
            `
            return new Promise((resolve, reject) => {
                db.query(myQuery, [sales_price, code], (err, results) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                });
            });
        })  
    }
}

export { ProductsRepository }