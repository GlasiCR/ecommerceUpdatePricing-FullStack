const PacksSchema = new mongoose.Schema({
    id: {type: Number, required: true}, //id primario da tabela
    pack_id: {type: mongoose.Schema.Types.ObjectId, ref: "Products"}, //id do produto pack
    product_id: {type: Number, required: true}, //id do produto componente
    qty: {type: Number, required: true}, //quantidade do produto componente no pack
})

const Packs = mongoose.model("Packs", PacksSchema)

export { Packs }