import uniqueId from 'lodash/uniqueId';

let categories = [
    {
        id: uniqueId(),
        name: 'Category 1',
        tasks: [
            {
                id: uniqueId(),
                name: 'Task 1 1',
                done: false,
                description: ''
            },
            {
                id: uniqueId(),
                name: 'Task 1 2',
                done: false,
                description: ''
            }
        ]
    }, {
        id: uniqueId(),
        name: 'Category 2',
        categories: [{
            id: uniqueId(),
            name: 'Category 2 1',
            tasks: [
                {
                    id: uniqueId(),
                    name: 'Task 2 1 1',
                    done: false,
                    description: ''
                },
                {
                    id: uniqueId(),
                    name: 'Task 2 1 2',
                    done: false,
                    description: ''
                }
            ]
        }],
        tasks: [
            {
                id: uniqueId(),
                name: 'Task 2 1',
                done: false,
                description: 'Task 2 1'
            },
            {
                id: uniqueId(),
                name: 'Task 2 2',
                done: true,
                description: 'Task 2 2'
            }
        ]
    }
];

class AppService {

    getCategories() {
        return categories;
    }

}

export default new AppService();