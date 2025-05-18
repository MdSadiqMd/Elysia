import { Elysia } from 'elysia';
import { getPosts } from '../handlers';

const routes = new Elysia({ prefix: '/posts' })
    .get('/', () => getPosts())
    .get('/id', () => 'Get Post by id')
    .post('/', () => 'Create Post')
    .put('/id', () => 'Update Post by id')
    .delete('/id', () => 'Delete Post by id');

export default routes;
