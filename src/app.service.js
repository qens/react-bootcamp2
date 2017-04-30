let categories;

class AppService {


    getCategories() {
        return categories;
    }

    getCategoryById(id) {
        console.debug(id);
        return categories[0];
    }


    getTaskById(taskId) {
        console.debug(taskId);
        return categories[0].tasks[0];

    }
}

export default new AppService();