const data = require('../shared/product-data');

module.exports = async function (context, req) {
  try {
    context.res.status(200).json(data.getProducts());
  } catch (error) {
    context.res.status(500).send(error);
  }
};
