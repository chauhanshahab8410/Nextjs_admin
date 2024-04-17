import pool from '../../../db/db';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    
    try {
        const client = await pool.connect();
        const result = await client.query(`SELECT count(actual_status) FROM trans_load_posting_hdr where actual_status = 'Awarded';`);
        const results = { 'results': (result) ? result.rows : null };
        console.log(results);
        client.release(); // Release the client connection here
        return NextResponse.json(results);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}