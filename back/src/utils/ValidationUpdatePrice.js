import * as yup from "yup";

class ValidationUpdatePrice {
  static async isValid(data) {
    const validationProductsSchema = yup.object().shape([{
      code: yup.number().required("Campo obrigatório"),
      name: yup.string().required("Campo obrigatório"),
      new_price: yup.number().required("Campo obrigatório"),
    }]);

    try {
      await validationProductsSchema.validate(data);
      return { error: false };
    } catch (err) {
      return { error: true, messages: err.errors };
    }
  }
}

export { ValidationUpdatePrice };