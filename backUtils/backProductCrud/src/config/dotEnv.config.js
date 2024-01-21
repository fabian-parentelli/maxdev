import dotEnv from 'dotenv';

dotEnv.config();

export default {
    port: process.env.PORT,
    mongoDB: process.env.MONGODB,
    privateKeyPassport: process.env.PRIVATEKEYPASSPORT,
};