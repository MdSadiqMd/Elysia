import prisma from "../db";

const getPosts = async () => {
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

const getPostsById = async (id: number) => {
    try {
        return await prisma.post.findUnique({
            where: {
                Id: Number(id)
            }
        });
    } catch (error) {
        console.log(`Error in getPostsById: ${error}`);
    }
};

const createPosts = async (title: string, content: string) => {
    try {
        return await prisma.post.create({
            data: {
                title: title,
                content: content,
                createdAt: new Date(Date.now())
            }
        });
    } catch (error) {
        console.log(`Error in createPosts: ${error}`);
    }
};

const updatePosts = async (id: number, title: string, content: string) => {
    try {
        return await prisma.post.updateMany({
            where: {
                Id: Number(id)
            },
            data: {
                title: title,
                content: content,
                updatedAt: new Date(Date.now())
            }
        });
    } catch (error) {
        console.log(`Error in updatePosts: ${error}`);
    }
};


const deletePost = async (id: number) => {
    try {
        return await prisma.post.delete({
            where: {
                Id: Number(id)
            }
        });
    } catch (error) {
        console.log(`Error in deletePosts: ${error}`);
    }
};

export {
    getPosts,
    getPostsById,
    createPosts,
    updatePosts,
    deletePost
};