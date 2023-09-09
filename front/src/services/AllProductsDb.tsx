import  axios  from "axios";


const AllProductsDb = async () => {
    try {
      const response = await axios.get("http://localhost:3332/");
      console.log('Resposta do servidor:', response);
      return response.data
    } catch (error) {
      console.error('Erro ao enviar arquivo:', error);
    }
  };

  export{ AllProductsDb }