import dotEnv from 'dotenv';

dotEnv.config();

export default {
    port: process.env.PORT,
    privateKeyPassport: process.env.PRIVATEKEYPASSPORT,
    mongoDB: process.env.MONGODB,
    privateKey: process.env.PRIVATEKEY,
    userNodemailer: process.env.USERNODEMAILER,
    passNodemailer: process.env.PASSNODEMAILER,
};