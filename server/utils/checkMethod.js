import { NextResponse } from "next/server"

export default function checkMethod(allowedMethods, method) {
    if (!(allowedMethods.includes(method))) {
        return new NextResponse(
            JSON.stringify({ success: false, error: "The request method is not in allowedMethods" + req.method}),
            { status: 400 }
        )
    }
    return NextResponse.next()
}