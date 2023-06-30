import { conn } from "@/pages/utils/database";
import { NextApiRequest, NextApiResponse } from "next"

const visita= async function (req: NextApiRequest, res: NextApiResponse) {
    const { method, body } = req;

    switch (method) {
        case "GET":
            try {
                const query = "SELECT * FROM visita";
                const response = await conn.query(query);
                return res.json({
                    message: "visita consultada exitosamente", total: response.rowCount,
                    response: response.rows
                });
            } catch (error: any) {
                return res.status(400).json({ message: error.message });
            }
        case "POST":

            try {
                const { lugar_seguro, dias, fecha, hora, visita_previa, visita_proxima, id_estado, id_transporte, extranjeros, numero, id_lugar, comentario, calificacion, aceptado, revisado } = body;
                const query1 = "INSERT INTO visita(lugar_seguro,dias,fecha,hora,visita_previa,visita_proxima,id_estado,id_transporte,extranjeros,numero,id_lugar) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *";
                const values1 = [lugar_seguro, dias, fecha, hora, visita_previa, visita_proxima, id_estado, id_transporte, extranjeros, numero, id_lugar];
                const response1 = await conn.query(query1, values1);
                //
                //
                const insertQuery2 = 'INSERT INTO comentarios(id_lugar,id_visita ,comentario,calificacion ,fecha ,hora,aceptado,revisado ) VALUES ($1, $2, $3, $4,$5,$6,$7,$8) RETURNING *'
                const insertValues2 = [id_lugar, response1.rows[0].id_visita, comentario, calificacion, fecha, hora, aceptado, revisado];
                const response2 = await conn.query(insertQuery2, insertValues2);
                //
                //
                const text = "SELECT * FROM comentarios WHERE id_lugar=$1";
                const values = [body.id_lugar];

                const result5 = await conn.query(text, values);
                const estrellas3 = await conn.query(`select avg(calificacion) from comentarios WHERE id_lugar='${body.id_lugar}'`)

                const insertQuery3 = `UPDATE lugar set estrellas='${estrellas3.rows[0]["avg"]}',total_comentarios='${result5.rowCount}' WHERE id_lugar='${body.id_lugar}'  RETURNING *`
                const response3 = await conn.query(insertQuery3);


                return res.status(200).json({
                    message: "Visita agregada exitosamente",
                    response: {
                        ...response1.rows[0],
                        ...response2.rows[0],
                        ...response3.rows[0]

                    }
                });
                // return res.status(200).json(response2.rows[0]);

            } catch (error: any) {
                return res.status(400).json({ message: error.message });
            }

        default:
            return res.status(400).json({ message: "Method are not supported" });
    }
};
export default visita;