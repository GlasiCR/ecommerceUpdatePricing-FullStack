import  axios  from "axios";

const UploadFileNewPrice = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
  
      const response = await axios.post('http://localhost:3332/products/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      console.log('Resposta do servidor:', response.data);
    } catch (error) {
      console.error('Erro ao enviar arquivo:', error);
    }
  };

  export{ UploadFileNewPrice }