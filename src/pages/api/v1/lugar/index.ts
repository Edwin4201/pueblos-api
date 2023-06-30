import { conn } from "@/pages/utils/database";
import { NextApiRequest, NextApiResponse } from "next"

const lugar= async function (req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const query = "SELECT * FROM lugar ORDER BY id_lugar ASC ";
        const response = await conn.query(query);
        return res.json({
          message: "Lugares consultado exitosamente", total: response.rowCount,
          response: response.rows
        });
      } catch (error: any) {
        return res.status(400).json({ message: error.message });
      }
    case "POST":

      try {
        const { id_lugar, nombre, id_estado, estrellas, total_comentarios } = body;
        const buscarLugar = await conn.query(`SELECT id_lugar FROM lugar WHERE id_lugar ='${body.id_lugar}' `);

        if (buscarLugar.rows.length > 0) return res.status(401).json({
          message: "el id_lugar ya existe",
          response: {
            ...buscarLugar.rows[0],
          }
        });



        const query1 = "INSERT INTO lugar( id_lugar ,nombre, id_estado ,estrellas , total_comentarios) VALUES ($1,$2,$3,$4,$5) RETURNING *";
        const values1 = [id_lugar, nombre, id_estado, estrellas, total_comentarios];
        const response1 = await conn.query(query1, values1);
        return res.status(200).json({
          message: "Lugar agregado exitosamente",
          response: {
            ...response1.rows[0],


          }
        });

      } catch (error: any) {
        return res.status(400).json({ message: error.message });
      }


    default:
      return res.status(400).json({ message: "Method are not supported" });
  }
};
export default lugar;