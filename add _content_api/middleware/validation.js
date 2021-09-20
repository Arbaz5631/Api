import Utils from "../app/utils";
import * as yup from "yup";

module.exports = {
  validateAddContent: async (req, res, next) => {
    if(req.body.contentType==="VIDEO"){
      var schema = yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required(),
        category: yup.string().required(),
        subCategory: yup.string().required(),
        superCategory: yup.string().required(),
        contentType: yup.string().required(),
        status: yup.string().required(),
        ratePerView: yup.number().required(),
        product: yup
          .object()
          .shape({ name: yup.string().required(), _id: yup.string().required() })
          .required(),
        advertiser: yup  
        .object()
          .shape({ name: yup.string().required(), _id: yup.string().required() })
          .required(),
      });
    }
    else{
      var schema = yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required(),
        category: yup.string().required(),
        subCategory: yup.string().required(),
        superCategory: yup.string().required(),
        contentType: yup.string().required(),
        status: yup.string().required(),
        
        
      });
    }
    await validate(schema, req.body, res, next);
  },
  validateGetContent: async (req, res, next) => {
    const schema = yup.object().shape({
      id: yup.string().required(),
    });
    await validate(schema, req.query, res, next);
  },
};

const validate = async (schema, reqData, res, next) => {
  try {
    await schema.validate(reqData, { abortEarly: false });
    next();
  } catch (e) {
    const errors = e.inner.map(({ path, message, value }) => ({
      path,
      message,
      value,
    }));
    Utils.responseForValidation(res, errors);
  }
};
