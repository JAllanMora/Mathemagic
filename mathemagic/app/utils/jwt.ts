import jwt from "jsonwebtoken";

const getSecretKey = () => {
    const secretKey = process.env.SECRETKEY;
    if (!secretKey) {
        throw new Error("La clave secreta no está definida en las variables de entorno.");
    }
    return secretKey;
}

export const generateToken = (payload) => {
    const secretKey = getSecretKey();
    return jwt.sign(payload, secretKey, { expiresIn: "1h" });
};

export const verifyToken = (token) => {
    const secretKey = getSecretKey();
    return new Promise((resolve, reject) => {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                reject(err);
            } else {
                resolve(decoded);
            }
        });
    });
};