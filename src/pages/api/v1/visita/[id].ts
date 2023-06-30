import { conn } from "@/pages/utils/database";
import { NextApiRequest, NextApiResponse } from "next";

const visitaid= async (req: NextApiRequest, res: NextApiResponse) => {
    const { method, query } = req;

    switch (method) {
        case "GET":
            try {
                const text = "SELECT * FROM visita WHERE id_lugar=$1";
                const values = [query.id];

                const result = await conn.query(text, values);
                if (result.rows.length === 0)
                    return res.status(404).json({ message: "Visita not found", response: [] });
                return res.json({ message: "Visistas por lugar consultadas exitosamente", total: result.rowCount, response: result.rows });

            } catch (error: any) {
                return res.status(500).json({ message: error.message });
            }
        default:
            return res.status(400).json("Method not allowed");
    }
};
export default visitaid;