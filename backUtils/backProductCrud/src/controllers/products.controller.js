import * as productsService from '../services/products.service.js';
import { ProductNotFound } from "../utils/custom-exceptions.utils.js";

const save = async (req, res) => {
    try {
        const result = await productsService.save({ ...req.body }, { ...req.file });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ProductNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAll = async (req, res) => {
    try {
        const result = await productsService.getAll();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ProductNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getById = async (req, res) => {
    const { pid } = req.params;
    try {
        const result = await productsService.getById(pid);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ProductNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const update = async (req, res) => {
    const { pid } = req.params;
    const product = req.body;
    let file;
    if (req.file) { file.imgName = req.file.originalname, file.path = req.file.path };
    try {
        const result = await productsService.update(product, file, pid);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ProductNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const deleteById = async (req, res) => {
    const { pid } = req.params;
    try {
        const result = await productsService.deleteById(pid);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ProductNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { save, getAll, update, getById, deleteById };