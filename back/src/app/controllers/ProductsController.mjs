import { parse } from 'csv-parse';

class ProductsController {
    constructor(service) {
        this.service = service
    }

    async uploadNewProductsPrice(req, res) {
        const fileContent = req.file.buffer.toString("utf-8");

        const records = [];

        const parser = parse({
            delimiter: ';',
            columns: true
        });

        parser.on('readable', function () {
            let record;
            while ((record = parser.read()) !== null) {
                records.push(record);
            }
        });

        parser.on('error', function (err) {
            console.error(err.message);
        });

        parser.on('end', async function(){
            console.log('Conteúdo do CSV processado:', records);

            records.forEach(record => {
                record.new_price = parseFloat(record.new_price);
            });

            const validationPromises = records.map(record => ValidationUpdatePrice.isValid(record));
            const validationResults = await Promise.all(validationPromises);
            const hasError = validationResults.some(result => result.error);

            if (hasError) {
                return res.status(400).json({ error: true, messages: "Erro na validação dos dados" });
            }

            res.status(200).json(records);
        });

        parser.write(fileContent);
        parser.end();
    }

    async updateNewProductsPrice(req, res) {
        const {body} = req
        const result = await this.service.updateNewProductsPrice(body.data)
        if ('error' in result) {
            return res.status(result.status).json(result)
        }
        return res.status(201).json(body)
        }
    }

export { ProductsController };