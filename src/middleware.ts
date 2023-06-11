import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({ secretKey: process.env.CLERK_SECRET_KEY });

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};