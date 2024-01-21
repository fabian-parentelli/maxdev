import Router from "./router.js";
import * as productController from '../controllers/products.controller.js';
import { passportEnum } from "../config/enums.config.js";
import { uploader } from '../config/multer.config.js';

export default class ProductRouter extends Router {
    init() {
        this.post('/', ['PUBLIC'], passportEnum.NOTHING, uploader.single('file'), productController.save);
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, productController.getAll);
        this.get('/:pid', ['PUBLIC'], passportEnum.NOTHING, productController.getById);
        this.put('/:pid', ['PUBLIC'], passportEnum.NOTHING, uploader.single('file'), productController.update);
        this.delete('/:pid', ['PUBLIC'], passportEnum.NOTHING, productController.deleteById);
    };
};