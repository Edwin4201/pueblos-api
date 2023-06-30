import { conn } from "@/pages/utils/database";
import { NextApiRequest, NextApiResponse } from "next"

const noaceptadosgeneral= async function (req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const query = "SELECT * FROM comentarios WHERE aceptado=FALSE";
        const response = await conn.query(query);
        return res.json({
          message: "Comentarios no aceptados consultados exitosamente"
          , total: response.rowCount,
          response: response.rows
        });
      } catch (error: any) {
        return res.status(400).json({ message: error.message });
      }

    default:
      return res.status(400).json({ message: "Method are not supported" });
  }
}; 
export default noaceptadosgeneral;