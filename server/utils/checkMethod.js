import { NextResponse } from "next/server"

export default function checkMethod(req, res, allowedMethods) {
    if (!(allowedMethods.includes(req.method))) {
        return res.status(400)
    }
    return NextResponse.next()
} 
