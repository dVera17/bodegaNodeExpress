import getConn from "./../db/database.js";

const getBodegas = (req, res) => {
    try {
        const conn = getConn();
        conn.query('SELECT * FROM bodegas ORDER BY nombre ASC;', (err, data, fields) => {
            if (err) console.log(err);
            res.json(data);
        });
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const addBodega = (req, res) => {
    try {
        const conn = getConn();
        const { nombre, id_responsable, estado, created_by, update_by } = req.body;
        conn.query('INSERT INTO bodegas(nombre, id_responsable, estado, created_by, update_by) VALUES(?, ?, ?, ?, ?);', [nombre, id_responsable, estado, created_by, update_by], (err, data, fields) => {
            if (err) console.log(err);
            res.json(data);
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const methodsBodegas = {
    getBodegas,
    addBodega
}