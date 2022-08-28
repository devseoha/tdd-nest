const productModel = require("../models/Product");

exports.createProduct = async (req, res, next) => {
  productModel.create(req.body);
  /* test => expect(res.statusCode).toBe(201);
   * code => res.status(201)
   * 반환하는 코드가 동일한지 확인
   * test => expect(res._isEndCalled()).toBeTruthy();
   * code => res.send();
   * 트루로 반환하는지 확인
   * */
  res.status(201).send(false);
};
