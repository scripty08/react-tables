export class ExampleController {

    init(server, router) {
        router.get('/example/read', this.readAction);
        server.use(router);
    }

    readAction(req, res) {
        const pagination = JSON.parse(req.query.pagination);
        switch (pagination.page) {
            case 0:
                return res.status(200).send({
                        data: [
                            {
                                type: 'site-1-bla1',
                                content: {
                                    title: 'test1',
                                    html: 'ja'
                                }
                            },
                            {
                                type: 'site-1-blub2',
                                content: {
                                    title: 'test2',
                                    html: 'ja'
                                }
                            },
                            {
                                type: 'site-1-blub3',
                                content: {
                                    title: 'test3',
                                    html: 'ja'
                                }
                            }
                        ],
                        pagination: {
                            page: 0,
                            size: 3,
                            count: 3
                        }
                    }
                );
            case 1:
                return res.status(200).send({
                        data: [
                            {
                                type: 'site-2-bla1',
                                content: {
                                    title: 'test1',
                                    html: 'ja'
                                }
                            },
                            {
                                type: 'site-2-blub2',
                                content: {
                                    title: 'test2',
                                    html: 'ja'
                                }
                            },
                            {
                                type: 'site-2-blub3',
                                content: {
                                    title: 'test3',
                                    html: 'ja'
                                }
                            }
                        ],
                        pagination: {
                            page: 1,
                            size: 3,
                            count: 3
                        }
                    }
                );
            case 2:
                return res.status(200).send({
                        data: [
                            {
                                type: 'site-3-bla1',
                                content: {
                                    title: 'test1',
                                    html: 'ja'
                                }
                            },
                            {
                                type: 'site-3-blub2',
                                content: {
                                    title: 'test2',
                                    html: 'ja'
                                }
                            },
                            {
                                type: 'site-3-blub3',
                                content: {
                                    title: 'test3',
                                    html: 'ja'
                                }
                            }
                        ],
                        pagination: {
                            page: 2,
                            size: 3,
                            count: 3
                        }
                    }
                );
        }


    }
}
