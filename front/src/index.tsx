import { useEffect, useState } from "react";
import Button from "./components/button";
import Header from "./components/header";
import Table from "./components/table";
import { color } from "./theme/constants";
import { TypeUploadTablePrice } from "./type/TypeUploadTablePrice";
import { AllProductsDb } from "./services/AllProductsDb";
import { UpdatePriceProducts } from "./services/UpdatePriceProducts";

const tableFileCsv = [
    { code: 1000, name: "BEBIDA ENERGÉTICA VIBE 2L - 6 UNIDADES", new_price: 54 },
  ];

export default function UpdatePricing() {
  const [tableUploadToUpdate, setTableUploadToUpdate] = useState<Array<TypeUploadTablePrice>>([])
  const [isAllValid, setIsAllValid] = useState(false)
  
  async function updatePrices (){
    return await UpdatePriceProducts(tableUploadToUpdate)
  }

  async function validatePrices (){
    const dataDb = await AllProductsDb();
    const updatedTable = dataDb.map((dbProduct) => {
    const matchingProduct = tableFileCsv.find((item) => item.code === dbProduct.code);
    if (matchingProduct) {
      const { code, name, new_price } = matchingProduct
      const { sales_price, cost_price } = dbProduct

      const validation = validationNewPrice(cost_price, sales_price, new_price);

      return { code, name, new_price, cost_price, sales_price, validation };
    }
    return null;
  });

  const updatedTableFiltered = updatedTable.filter(Boolean); // Remove os elementos nulos

  setTableUploadToUpdate(updatedTableFiltered);

  const enableButton = updatedTableFiltered.every(
    (item) => item.validation === "Validação concluída com sucesso!"
    )

  setIsAllValid(enableButton);
  }
  
  function validationNewPrice(cost: number, currenty: number, newPrice: number){
            const validPercentage = 10
            const maxPrice = currenty + ((currenty * validPercentage)/100)
            const minPrice = currenty - (currenty * (validPercentage / 100))
    
            if(newPrice < cost){
                return `Cuidado com prejuízo! Registre um preço maior que o custo do produto, R$ ${cost}`
            }
            if(newPrice < minPrice){
                return`Cuidado com prejuízo! Informe um preço a partir de R$ ${minPrice}`
            }
            if(newPrice > maxPrice){
                return `Opa! O preço aumentou mais do que o esperado. Informe um valor até R$ ${maxPrice}` 
            }
            if(newPrice > cost){     
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
          
        />
        <Button 
        onClick={updatePrices} 
        titleButton="Atualizar" 
        disabled= {!isAllValid}/>
      </Header>
      <Table header={["Código", "Produto", "Custo do Produto", "Preço Atual", " Novo Preço", "Validação"]}>
        {tableUploadToUpdate.map((item) => (
          <tr key={item.code}>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>R$ {item.cost_price} </td>
            <td>R$ {item.sales_price}</td>
            <td>R$ {item.new_price}</td>
            <td>{item.validation}</td>
          </tr>
        ))}
      </Table>
    </>
  );
}
