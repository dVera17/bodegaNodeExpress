import getConn from "./../db/database.js";

const getProductos = (req, res) => {
    try {
        const conn = getConn();
        conn.query('SELECT * FROM productos ORDER BY nombre ASC', (err, data, fields) => {
            if (err) console.log(err);
            res.json(data);
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const methodsProductos = {
    getProductos
}