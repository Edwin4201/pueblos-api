import { conn } from "@/pages/utils/database";
import { NextApiRequest, NextApiResponse } from "next";

const lugar= (async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, query, body } = req;

    switch (method) {
        case "DELETE":
            try {
                const text = "SELECT id_lugar FROM comentarios WHERE id_lugar=$1";
                const values = [query.id];

                const buscarComentarios = await conn.query(text, values);
                if (buscarComentarios.rows.length > 0) return res.status(401).json({

                    message: "No puedes borrar este lugar por que esta relacionado con la tabla comentarios",
                    response: {
                        ...buscarComentarios.rows[0],
                    }
                });
                //

                const text2 = "SELECT id_lugar FROM visita WHERE id_lugar =$1";
                const values2 = [query.id];
                const buscarVisita = await conn.query(text2, values2);

                if (buscarVisita.rows.length > 0) return res.status(401).json({
                    message: "No puedes borrar este lugar por que esta relacionado con la tabla visita",
                    response: {
                        ...buscarVisita.rows[0],
                    }
                });


                const text3 = "DELETE FROM lugar WHERE id_lugar =$1 RETURNING *";
                const values3 = [query.id];
                const borrar = await conn.query(text3, values3);


                if (borrar.rows.length === 0) return res.status(200).json({
                    message: "No existe el id",
                    response: {
                        ...borrar.rows[0],
                    }
                });

                return res.status(200).json({
                    message: "Lugar borrado exitosamente",
                    response: {
                        ...borrar.rows[0],
                    }
                });

            } catch (error: any) {
                return res.status(400).json({ message: error.message });
            }
        case "PUT":
            try {
                const { nombre, id_estado, estrellas, total_comentarios } = body;
                const response = await conn.query(`UPDATE lugar SET id_lugar='${query.id}', nombre='${body.nombre}', id_estado='${body.id_estado}', estrellas='${body.estrellas}', total_comentarios='${body.total_comentarios}' WHERE id_lugar='${query.id}' RETURNING *`);

                if (response.rows.length === 0) return res.status(200).json({
                    message: "No existe el id",
                    response: {
                        ...response.rows[0],
                    }
                });
                return res.json({
                    message: "Lugar actualizado exitosamente",
                    total: response.rowCount,
                    response: response.rows[0]
                });
            } catch (error: any) {
                return res.status(400).json({ message: error.message });
            }

        default:
            return res.status(400).json("Method not allowed");
    }
});
export default lugar;