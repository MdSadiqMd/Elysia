import prisma from "../db";

export const getPosts = async () => {
    try {
        return await prisma.post.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
    } catch (error) {
        console.log(`Error in getPosts: ${error}`);
    }
};