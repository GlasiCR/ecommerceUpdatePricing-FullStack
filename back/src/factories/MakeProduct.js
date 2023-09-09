import { ProductsRepository } from "../app/repositories/ProductsRepository.js"
import { Products } from "../domain/Products.js"
import { ProductsService } from "../app/services/ProductsService.js"
import { ProductsController } from "../app/controllers/ProductsController.mjs"

class MakeUpdatePricingProducts{
    static getInstance(){
        const repository = new ProductsRepository(Products)
        const service = new ProductsService(repository)
        const controller = new ProductsController(service)

        return controller
    }
}

export { MakeUpdatePricingProducts }
