import getConn from "../db/database.js";
import { plainToClass } from 'class-transformer';
import inventarios from "../../controller/inventarios.js"

const addInventarios = (req, res) => {
    try {
        let dataSend = plainToClass(inventarios, req.body);
        let dataArray = [ dataSend.idProducto, dataSend.idBodega, dataSend.quantity]
        const conn = getConn();
        // Verificar si la combinación de producto y bodega ya existe en el inventario
        conn.query('SELECT * FROM inventarios WHERE id_producto = ? AND id_bodega = ?', [dataSend.idProducto, dataSend.idBodega], (err, rows) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error en la consulta de inventarios');
                return;
            }

            if (rows.length === 0) {
                // Combinación de producto y bodega no existe, realizar un INSERT
                conn.query('INSERT INTO inventarios (id_producto, id_bodega, cantidad) VALUES (?, ?, ?)', dataArray, (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send('Error al insertar en el inventario');
                        return;
                    }
                    res.status(200).send('Registro insertado en el inventario');
                });
            } else {
                const existingCantidad = rows[0].cantidad;
                const newCantidad = existingCantidad + dataSend.quantity;
                conn.query('UPDATE inventarios SET cantidad = ? WHERE id_producto = ? AND id_bodega = ?', [newCantidad, dataSend.idProducto, dataSend.idBodega], (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(500).send('Error al actualizar el inventario');
                        return;
                    }
                    res.status(200).send('Registro actualizado en el inventario');
                });
            }
        });
    } catch (error) {
        res.status(500).send('Error en el servidor');
    }
}

export const methodsInventarios = {
    addInventarios
}