import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
    try {
        const token = request.cookies.get("token")?.value || '';
        const decodedToken:any = jwt.verify(token, "4FC83CDBE2D6D21EE7B21B828A6EB985BC1085D9B8C67BA1FD1119AF5A5C2F74");
        return decodedToken.id;
    } catch (error: any) {
        throw new Error(error.message);
    }

}
