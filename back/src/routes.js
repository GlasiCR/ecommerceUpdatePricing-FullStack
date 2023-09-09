import { Router } from "express"
import multer from "multer"
import { MakeUpdatePricingProducts } from "./factories/MakeProduct.js"
import {getProductsAndPacks} from "./app/controllers/DBcontroller.js"

const storage = multer.memoryStorage();

const upload = multer({ storage });

const router = Router()
const makeUpdatePricingProducts = MakeUpdatePricingProducts.getInstance()

router.get("/", getProductsAndPacks)

router.get("/products/upload", upload.single("file"), makeUpdatePricingProducts.uploadNewProductsPrice.bind(makeUpdatePricingProducts))

router.put("/products/update", makeUpdatePricingProducts.updateNewProductsPrice.bind(makeUpdatePricingProducts));

export { router }