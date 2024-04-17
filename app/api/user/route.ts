import pool from '../../../db/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    
    try {
        const client = await pool.connect();
        console.log("tinku")
        console.log("dgvgvgtvgtvg7777777777777")
        const result = await client.query(`SELECT * from mst_fzulu_login where CAST(account_code AS INTEGER) between '10' and '20' ORDER BY CAST(account_code AS INTEGER) ASC`);
        const results = { 'results': (result) ? result.rows : null };
        console.log(results);
        client.release(); // Release the client connection here
        return NextResponse.json(results);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}



