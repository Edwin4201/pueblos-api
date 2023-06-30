import { conn } from "@/pages/utils/database";
import { NextApiRequest, NextApiResponse } from "next";

const cnoaceptados= async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, query } = req;

    switch (method) {
        case "GET":
            try {
                const text = "SELECT * FROM comentarios WHERE id_lugar=$1 AND aceptado=FALSE";
                const values = [query.id];

                const result = await conn.query(text, values);
                if (result.rows.length === 0)
                    return res.status(404).json({ message: "Comentario not found", response: [] });
                return res.json({ message: "Comentarios no aceptados consultados exitosamente", total: result.rowCount, response: result.rows });

            } catch (error: any) {
                return res.status(500).json({ message: error.message });
            }
        default:
            return res.status(400).json("Method not allowed");
    }
};
export default cnoaceptados;