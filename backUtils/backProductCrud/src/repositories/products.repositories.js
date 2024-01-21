import { productManager } from '../dao/manager/index.manager.js';


export default class ProductRepository {

    save = async (product) => {
        const result = await productManager.save(product);
        return result;
    };

    getAll = async () => {
        const result = await productManager.getAll();
        return result;
    };

    getById = async (id) => {
        const result = await productManager.getById(id);
        return result;
    }

    getByName = async (name) => {
        const result = await productManager.getByName(name);
        return result;
    };

    update = async (product) => {
        const result = await productManager.update(product);
        return result;
    };
};