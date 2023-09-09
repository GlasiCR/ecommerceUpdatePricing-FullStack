import { ValidationUpdatePrice } from "../../utils/ValidationUpdatePrice.js";

class ProductsService{
    constructor(repository){
        this.repository = repository
    }

    async uploadNewProductsPrice(){
        return await this.repository.uploadNewProductsPrice()
    }

    async updateNewProductsPrice(data) {
        const listToUpdate = await Promise.all(data.map(async (item) => {
          return await this.repository.updateNewProductsPrice(item.code, item.new_price);
        }));
        return listToUpdate;
      }
}

export { ProductsService }