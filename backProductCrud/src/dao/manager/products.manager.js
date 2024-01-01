import { productModel } from '../models/products.model.js';

export default class Product {

    save = async (product) => {
        return await productModel.create(product);
    };

    getAll = async () => {
        return await productModel.find().lean();
    };

    getById = async (id) => {
        return await productModel.findOne({ _id: id }).lean();
    }

    getByName = async (name) => {
        return await productModel.findOne({ title: name });
    };

    update = async (product) => {
        return await productModel.findByIdAndUpdate(product._id, product, { new: true }).lean();
    };
};