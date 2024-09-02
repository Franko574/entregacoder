import ProductDaoMongoDB from "../daos/product.dao";

class ProductService {
  constructor() {
    this.prodDao = new ProductDaoMongoDB();
  }
  getAll = async (page, limit, name, sort) => {
    try {
      return await prodDao.getAll(page, limit, name, sort);
    } catch (error) {
      console.log(error);
    }
  };

  getById = async (id) => {
    try {
      const prod = await prodDao.getById(id);
      if (!prod) return false;
      else return prod;
    } catch (error) {
      console.log(error);
    }
  };

  create = async (obj) => {
    try {
      const newProd = await prodDao.create(obj);
      if (!newProd) return false;
      else return newProd;
    } catch (error) {
      console.log(error);
    }
  };

  update = async (id, obj) => {
    try {
      const prodUpd = await prodDao.update(id, obj);
      if (!prodUpd) return false;
      else return prodUpd;
    } catch (error) {
      console.log(error);
    }
  };

  remove = async (id) => {
    try {
      const prodDel = await prodDao.delete(id);
      if (!prodDel) return false;
      else return prodDel;
    } catch (error) {
      console.log(error);
    }
  };
}

export const productService = new ProductService();
