import { Pool } from "pg";


let conn: any;

/* if (!conn) {
    conn = new Pool({
        user: "llevamea",
        password: "y3b4m34.n3t",
        host: "db-lugares.ck6xmagh1zxz.us-east-1.rds.amazonaws.com",
        port: 5432,
        database: "lugares",

    });
}
 */
if (!conn) {
    conn = new Pool({
        connectionString: `postgres://llevamea:y3b4m34.n3t@db-lugares.ck6xmagh1zxz.us-east-1.rds.amazonaws.com:5432/db-lugares`, ssl: {
            rejectUnauthorized: false
        }
    });
}
export { conn };