import { Elysia } from 'elysia';
import { createPosts, deletePost, getPosts, getPostsById, updatePosts } from '../handlers';

const routes = new Elysia({ prefix: '/posts' })
    .get('/', () => getPosts())
    .get('/:id', ({ params }: { params: { id: number; }; }) => getPostsById(params.id))
    .post('/', ({ body }: { body: { title: string, content: string; }; }) => createPosts(body.title, body.content))
    .patch('/:id', ({ params, body }: { params: { id: number; }; body: { title: string; content: string; }; }) => { updatePosts(params.id, body.title, body.content); })
    .delete('/:id', ({ params }: { params: { id: number; }; }) => deletePost(params.id));

export default routes;
