import getConn from "../db/database.js";

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

const addProducto = (req, res) => {
    try {
        const conn = getConn();
        const { nombre, descripcion, estado, created_by, update_by } = req.body;
        const dataValues = [nombre, descripcion, estado, created_by, update_by];

        conn.query('INSERT INTO productos(nombre, descripcion, estado, created_by, update_by) VALUES (?, ?, ?, ?, ?)', dataValues, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send(err.message);
                return;
            }

            const productId = result.insertId;
            const defaultBodegaId = 11; // ID de la bodega por defecto

            conn.query('INSERT INTO inventarios(id_bodega, id_producto, created_by, update_by) VALUES (?, ?, ?, ?)', [defaultBodegaId, productId, created_by, update_by], (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(500).send(err.message);
                    return;
                }
                res.json(result);
            });
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const methodsProductos = {
    getProductos,
    getTotalProductos,
    addProducto
}