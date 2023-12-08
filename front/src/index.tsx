import { useEffect, useState } from "react";
import Button from "./components/button";
import Header from "./components/header";
import Table from "./components/table";
import { color } from "./theme/constants";
import { TypeUploadTablePrice } from "./type/TypeUploadTablePrice";
import { AllProductsDb } from "./services/AllProductsDb";
import { UpdatePriceProducts } from "./services/UpdatePriceProducts";
import Papa from "papaparse"


export default function UpdatePricing() {
  const [tableUploadToUpdate, setTableUploadToUpdate] = useState<Array<TypeUploadTablePrice>>([])
  const [isAllValid, setIsAllValid] = useState(false)
  const [tableFileCsv, setTableFileCsv] = useState<Array<TypeUploadTablePrice>>([])

  async function updatePrices() {
    return await UpdatePriceProducts(tableUploadToUpdate)
  }

  async function validatePrices() {
    const transformArray = Array.from(tableFileCsv)
    console.log(transformArray, 27)
    if (!tableFileCsv || !tableFileCsv[0]) {
      console.error("Nenhum arquivo selecionado");
      return;
    }
    const dataDb = await AllProductsDb();

    const updatedTable = dataDb.map((dbProduct) => {
      const matchingProduct = transformArray.find((item) => item.code === dbProduct.code);
      if (matchingProduct) {
        const { code, name, new_price } = matchingProduct
        const { sales_price, cost_price } = dbProduct

        const validation = validationNewPrice(cost_price, sales_price, new_price as number);
        return { code, name, new_price, cost_price, sales_price, validation };
      }
      return null;
    });

    const updatedTableFiltered = updatedTable.filter(Boolean);

    setTableUploadToUpdate(updatedTableFiltered);

    const enableButton = updatedTableFiltered.every(
      (item) => item.validation === "Validação concluída com sucesso!"
    );

    setIsAllValid(enableButton);
  }

  const lerDadosArquivos = (event: any) => {
    const arquivo = event.target.files[0]
    if(arquivo){
      Papa.parse(arquivo, {
        header: true,
        dynamicTyping: true,
        complete: (result) => {
          const listProducts = result.data
          setTableFileCsv(listProducts as any)
        }
      })
    }
  }

  function validationNewPrice(cost: number, currenty: number, newPrice: number) {
    const validPercentage = 10
    const maxPrice = currenty + ((currenty * validPercentage) / 100)
    const minPrice = currenty - (currenty * (validPercentage / 100))
    console.log("chamei a função")
    if (newPrice < cost) {
      return `Cuidado com prejuízo! Registre um preço maior que o custo do produto, R$ ${cost}`
    }
    if (newPrice < minPrice) {
      return `Cuidado com prejuízo! Informe um preço a partir de R$ ${minPrice}`
    }
    if (newPrice > maxPrice) {
      return `Opa! O preço aumentou mais do que o esperado. Informe um valor até R$ ${maxPrice}`
    }
    if (newPrice > cost) {
      return "Validação concluída com sucesso!"
    }
  }

  return (
    <>
      <Header titlePage="Atualização de Preço dos Produtos">
        <Button
          bgButton="transparent"
          borderButton={`2px solid ${color.secondary}`}
          onClick={validatePrices}
          titleButton="Validar"
          input={<input type="file" accept=".csv" onChange={lerDadosArquivos} />  
        }
        />
        <Button
          onClick={updatePrices}
          titleButton="Atualizar"
          disabled={!isAllValid} />
      </Header>
      <Table header={["Código", "Produto", "Custo do Produto", "Preço Atual", " Novo Preço", "Validação"]}>
        {tableUploadToUpdate.map((item) => (
          <tr key={item.code}>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>R$ {item.cost_price} </td>
            <td>R$ {item.sales_price}</td>
            <td>R$ {item.new_price}</td>
            <td>R$ {item.validation}</td>
          </tr>
        ))}
      </Table>
    </>
  );
}
