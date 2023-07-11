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

const getTotalProductos = (req, res) => {
    try {
        const conn = getConn();
        conn.query('SELECT p.id, p.nombre, p.descripcion, SUM(i.cantidad) AS Total FROM productos p JOIN inventarios i ON p.id = i.id_producto GROUP BY p.id, p.nombre, p.descripcion ORDER BY Total DESC;', (err, data, fields) => {
            if (err) console.log(err);
            res.json(data);
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const methodsProductos = {
    getProductos,
    getTotalProductos
}