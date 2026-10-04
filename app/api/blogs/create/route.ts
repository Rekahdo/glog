// https://nextjs.org/docs/app/getting-started/route-handlers#route-handlers

import { NextResponse } from "next/server";
import { success } from "zod";

export async function POST(data: Request) {
    console.log("Inserting blog")
    setTimeout(() => console.log("Inserted"), 2000)
    
    return NextResponse.json({success: true})
}