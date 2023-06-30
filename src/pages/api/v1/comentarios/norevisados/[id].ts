import { conn } from "@/pages/utils/database";
import { NextApiRequest, NextApiResponse } from "next";

const cnorevisados= (async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, query, body } = req;

    switch (method) {
        case "PUT":
            try {
                const { id_lugar, id_visita, comentario, calificacion, fecha, hora, aceptado, revisado, id_comentarios } = body;

                const response = await conn.query(`UPDATE comentarios SET id_lugar='${body.id_lugar}', id_visita='${body.id_visita}', comentario='${body.comentario}', calificacion='${body.calificacion}', fecha='${body.fecha}', hora ='${body.hora}', aceptado='${body.aceptado}',revisado='${body.revisado}' WHERE id_comentarios='${query.id}' RETURNING *`);
                if (response.rows.length === 0) return res.status(200).json({
                    message: "No existe el id",
                    response: {
                        ...response.rows[0],
                    }
                });
                return res.json({
                    message: "Comentario revisado actualizado exitosamente",
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
export default cnorevisados;