import getConn from "../db/database.js";
import { plainToClass } from 'class-transformer';
import { bodegas } from '../../controller/bodegas.js';

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
        let dataSend = plainToClass(bodegas, req.body);
        let dataArray = [dataSend.name, dataSend.idResponsable, dataSend.status, dataSend.createdBy, dataSend.updatesBy]
        const conn = getConn();
        conn.query(`INSERT INTO bodegas(nombre, id_responsable, estado, created_by, update_by) VALUES(?, ?, ?, ?, ?);`, dataArray, (err, data, fields) => {
            if (err) console.log(err);
            res.json(data);
        });
    } catch (error) {
        res.status(error.status).send(error.message);
    }
}

export const methodsBodegas = {
    getBodegas,
    addBodega
}