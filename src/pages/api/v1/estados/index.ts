import { conn } from "@/pages/utils/database";
import { NextApiRequest, NextApiResponse } from "next"

const estados= async function (req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const query = "SELECT * FROM estados";
        const response = await conn.query(query);
        return res.json({
          message: "Estados consultado exitosamente", total: response.rowCount,
          response: response.rows
        });
      } catch (error: any) {
        return res.status(400).json({ message: error.message });
      }

    default:
      return res.status(400).json({ message: "Method are not supported" });
  }
};
export default estados;