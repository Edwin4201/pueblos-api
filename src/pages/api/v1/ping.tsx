
import { NextApiRequest, NextApiResponse } from 'next';
import { conn } from '../../utils/database';

type Data={
  message:string;
  time:string;

}

const ping= async (req: NextApiRequest, res: NextApiResponse<Data>)=> {
  const response=await conn.query("SELECT NOW()");

return  res.json({ message:"pong",time:response.rows[0].now });
};
export default ping;