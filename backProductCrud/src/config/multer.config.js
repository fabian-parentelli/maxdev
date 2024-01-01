import multer from 'multer';
import { __mainDirname } from '../utils/path.utils.js';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `${__mainDirname}/document`)
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const uploader = multer({
    storage, onError: (err, next) => {
        console.log(err);
        next();
    }
});

export { __mainDirname, uploader };