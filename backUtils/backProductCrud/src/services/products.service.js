import { productRepository } from "../repositories/index.repositories.js";
import { ProductNotFound } from "../utils/custom-exceptions.utils.js";
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

const save = async (product, file) => {

    if (!product.title || !product.price) throw new ProductNotFound('Faltan datos para poder agregar al producto');
    const isName = await productRepository.getByName(product.title);
    if(isName) throw new ProductNotFound('Ya existe un producto con ese nombre');

    const objProduct = {
        title: product.title,
        price: product.price,
        imgName: file.originalname,
        path: file.path
    };
    const result = await productRepository.save(objProduct);
    if (!result) throw new ProductNotFound('No se pudo agregar el producto');
    return { status: 'success', result };
};

const getAll = async () => {
    const result = await productRepository.getAll();
    if (!result) throw new ProductNotFound('No se encuentran los productos');
    return { status: 'success', result };
};

const getById = async (id) => {
    if (!ObjectId.isValid(id)) throw new ProductNotFound('No es válido el Id');
    const result = await productRepository.getById(id);
    if (!result) throw new ProductNotFound('No se encuentra este producto');
    return { status: 'success', result };
};

const update = async (product, file, id) => {
    if (!ObjectId.isValid(id)) throw new ProductNotFound('No es válido el Id');

    const isProduct = await productRepository.getById(id);
    if (!isProduct) throw new ProductNotFound('No se encuentran los productos');

    const newObjProduct = { ...isProduct, ...product };
    if (file) {
        newObjProduct.imgName = file.originalname;
        newObjProduct.path = file.path
    };

    const result = await productRepository.update(newObjProduct);
    if (!result) throw new ProductNotFound('No se puede modificar el producto existente');
    return { status: 'success', result };
};

const deleteById = async (id) => {
    if (!ObjectId.isValid(id)) throw new ProductNotFound('No es válido el Id');

    const isProduct = await productRepository.getById(id);
    if (!isProduct) throw new ProductNotFound('No se encuentra el producto');
    isProduct.status = !isProduct.status

    const result = await productRepository.update(isProduct);
    if (!result) throw new ProductNotFound('No se puedeEliminar el producto existente');
    return { status: 'success', result };
};

export { save, getAll, update, getById, deleteById };