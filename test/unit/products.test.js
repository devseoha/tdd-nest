const productController = require("../../controller/products");
const productModel = require("../../models/Product");
const httpMocks = require("node-mocks-http");
const newProduct = require("../data/new-product.json");
productModel.create = jest.fn();

// 전역변수의 느낌처럼 모든 테스트가 실행될떄에 하단의 가짜 객체들이 생성된다.
let req, res, next;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
});

describe("product controller create test", () => {
  // 함수 내의 테스트가 실행 되기 전 바디가 생성된다.
  beforeEach(() => {
    req.body = newProduct;
  });

  it("should have a createProduct function", () => {
    expect(typeof productController.createProduct).toBe("function");
  });
  it("should call ProductModel.create", () => {
    productController.createProduct(req, res, next);
    expect(productModel.create).toBeCalledWith(newProduct);
  });
  it("should return 201 response code", () => {
    productController.createProduct(req, res, next);
    // status의 코드를 확인하는 곳
    expect(res.statusCode).toBe(201);
    //send의 트루를 반환하는지 확인
    expect(res._isEndCalled()).toBeTruthy();
  });

  it("should return json body in response", (req, res, next) => {
    productModel.create.mockReturnValue(newProduct);
    productController.createProduct(req, res, next);
    expect(rea._getJSONData()).toStrictEqual(newProduct);
  });
});
