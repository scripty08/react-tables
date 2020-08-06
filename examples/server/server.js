import { Server, IndexController } from '@scripty/server';
import dotenv from 'dotenv'
import { ExampleController } from './ExampleController';

const init = async () => {
    dotenv.config();

    let server = new Server();

    await server.addController(new IndexController({ title: '@scripty/react-tables' }));
    await server.addController(new ExampleController());
    server.start(3017);
};

init().catch((err) => {
    console.error(err.message);
});
