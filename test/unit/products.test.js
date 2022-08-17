const productController = require("../../controller/products");
const productModel = require("../../models/Product");
const httpMocks = require("node-mocks-http");
const newProduct = require("../data/new-product.json");
productModel.create = jest.fn();

describe("Calculate", () => {
  test("two plug two is four", () => {
    expect(2 + 2).not.toBe(5);
  });

  test("two plug two is not five", () => {
    expect(2 + 2).not.toBe(5);
  });
});

describe("product controller create test", () => {
  it("should have a createProduct function", () => {
    expect(typeof productController.createProduct).toBe("function");
  });
  it("should call ProductModel.create", () => {
    let req = httpMocks.createRequest();
    let res = httpMocks.createResponse();
    let next = null;
    req.body = newProduct;
    productController.createProduct(req, res, next);
    expect(productModel.create).toBeCalledWith(newProduct);
  });
});
