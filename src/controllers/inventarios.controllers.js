import getConn from "./../db/database.js";

const addInventarios = (req, res) => {
    try {
        const conn = getConn();
        const { id_producto, id_bodega, cantidad } = req.body;
        // Verificar si la combinación de producto y bodega ya existe en el inventario
        conn.query('SELECT * FROM inventarios WHERE id_producto = ? AND id_bodega = ?', [id_producto, id_bodega], (err, rows) => {
            if (err) {
                console.log(err);
                res.status(500).send('Error en la consulta de inventarios');
                return;
            }

            if (rows.length === 0) {
            // Combinación de producto y bodega no existe, realizar un INSERT
                conn.query('INSERT INTO inventarios (id_producto, id_bodega, cantidad) VALUES (?, ?, ?)', [id_producto, id_bodega, cantidad], (err, result) => {
                    if (err) {
                    console.log(err);
                    res.status(500).send('Error al insertar en el inventario');
                    return;
                    }
                    res.status(200).send('Registro insertado en el inventario');
                });
            } else {
                const existingCantidad = rows[0].cantidad;
                const newCantidad = existingCantidad + cantidad;
                conn.query('UPDATE inventarios SET cantidad = ? WHERE id_producto = ? AND id_bodega = ?', [newCantidad, id_producto, id_bodega], (err, result) => {
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