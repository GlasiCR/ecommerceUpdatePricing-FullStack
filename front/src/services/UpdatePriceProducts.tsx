import  axios  from "axios";
import { TypeUploadTablePrice } from "../type/TypeUploadTablePrice";

const UpdatePriceProducts = async (data: TypeUploadTablePrice[]) => {
    try {
        const response = await axios.put(`http://localhost:3332/products/update`, {
          data: data
        });
    
        return response.data;
      } catch (error) {
        console.error('Erro ao enviar arquivo:', error);
      }
  };

export{ UpdatePriceProducts }