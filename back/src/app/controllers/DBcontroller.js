import { db } from "../../databaseConfig/DatabaseConfig.js";

export const getProductsAndPacks = (_, res) => {
    const myQuery = "SELECT * FROM  products"

    db.query(myQuery, (err, data) => { 
       if (err) return res.json(err);
        
    return res.status(200).json(data)
    })
}