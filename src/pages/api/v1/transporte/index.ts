import { conn } from "@/pages/utils/database";
import { NextApiRequest, NextApiResponse } from "next"

const transporte= async function (req: NextApiRequest, res: NextApiResponse) {
    const { method, body } = req;

    switch (method) {
        case "GET":
            try {
                const query = "SELECT * FROM transporte";
                const response = await conn.query(query);
                return res.json({
                    message: "Transporte consultado exitosamente", total: response.rowCount,
                    response: response.rows
                });
            } catch (error: any) {
                console.log(error)
                return res.status(400).json({ message: error.message });
            }

        default:
            return res.status(400).json({ message: "Method are not supported" });
    }
};
export default transporte;