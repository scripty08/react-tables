import { createStore } from '@scripty/react-store';

export default createStore({
    name: 'exampleStore',
    model: {
        fields: [
            { name: 'type', type: 'string'},
            { name: 'content', type: 'object'}
        ]
    },
    proxy: {
        rootProperty: 'data',
        api: {
            read: {
                url: '/example/read',
                method: 'get'
            },
            create: {
                url: '/example/create',
                method: 'post'
            },
            search: {
                url: '/example/search',
                method: 'post'
            }
        }
    }
});
