console.log("HW15")
//Вам необхідно написати додаток Todolist, використовуючи синтаксис класів.
//1. Добавление таски: метод addTask, класс TodoList;
//2. Удаление таски: метод removeTask, класс TodoList;
//3. Редактирование таски: метод changeTask, класс Task;
//4. Полная информация по таске: метод getFullInfoTasks, класс Task;
//5. Получить весь список тасок: метод showTasks, класс TodoList;
//6. Отметить таску выполненной: метод taskDone, класс Task;
//7. Вывести количество всех тасок, а также выполненных/невыполненных: метод showTasks, класс TodoList;
//8. Поиск тасок по Title: метод searchTask, класс TodoList;
//9. Сортировка тасок по статусу: метод sortByStatus, класс TodoList;
//10.Создать дату создания/редактирования таски: метод getFullInfoTasks, класс Task;
//11.Поиск по дате: метод searchTaskByDate, класс TodoList
//12.Сортировка по дате: метод sortByDate, класс TodoList

class Task {
    constructor(id, title, status, creator) {
        this.id = id;
        this.title = title;
        this.status = status;
        this.creator = creator;
        this.createdAt = Date.now();
        this.updatedAt = null;
    }
    updatedTime() {
        this.updatedAt = Date.now();
        localStorage.setItem(`task-${this.id}-updatedAt`, this.updatedAt);
    }
    changeTask(changeField, newValue) {
        if (changeField === 'creator') {
            this.creator = newValue;
        } else if (changeField === 'title') {
            this.title = newValue;
        } else {
            return `The task isn't updated. The field is undefined: ${changeField}`;
        }
        this.updatedTime();
        return `Task with ID: ${this.id} is updated.`;
    }
    taskDone() {
        if (this.status) {
            if (this.status !== 'Done') {
                this.status = 'Done';
                this.updatedTime();
                return `Status of task "${this.id}. ${this.title}" is changed to "Done"`;
            } else {
                return 'Task is already marked as Done.';
            }
        } else {
            return 'Task has no initial status.';
        }
    }
    getFullInfoTasks() {
        const formatDataCreated = new Date(this.createdAt).toLocaleString();
        const formatDataUpdate = new Date(this.updatedAt).toLocaleString();
        return `${this.id}. ${this.title} - Status: ${this.status} 
        -> Creator: ${this.creator} 
        -> Created: ${formatDataCreated}
        -> Updated: ${this.updatedAt ? formatDataUpdate : "This task wasn't updated"}`
    }
}
class TodoList {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        if (!task.id) {
            throw new Error('This task has not unique ID');
        }

        const storedCreatedAt = localStorage.getItem(`task-${task.id}-createdAt`);

        if (storedCreatedAt) {
            task.createdAt = parseInt(storedCreatedAt);
        } else {
            task.createdAt = Date.now();
            localStorage.setItem(`task-${task.id}-createdAt`, task.createdAt);
        }

        this.tasks.push(task);
    }
    showTasks() {
        if (this.tasks.length === 0) {
            return 'Tasks not found.';
        }

        const completedTasks = this.tasks.filter(task => task.status === 'Done').length;
        const incompleteTasks = this.tasks.length - completedTasks;
        const formattedTasks = this.tasks.map(task => `${task.id}. ${task.title}`);

        return `List of tasks:\n${formattedTasks.join('\n')}
All tasks: ${this.tasks.length}
Completed: ${completedTasks}
Uncompleted: ${incompleteTasks}`;
    }

    removeTask(task) {
        const index = this.tasks.findIndex(item => item.id === task.id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
            return `Task "${task.id}.${task.title}" is deleted.`;
        } else {
            return `Task "${task.id}.${task.title}" is not found.`;
        }
    }

    searchTaskByTitle(title) {
        const taskTitle = this.tasks.filter(task => task.title.toLowerCase().includes(title.toLowerCase()));

        if (taskTitle.length > 0) {
            const result = taskTitle.map(task => `${task.id}. ${task.title}`);
            return `Tasks include: "${title}":\n${result.join('\n')}`;
        } else {
            return `No tasks containing text "${title}" found.`;
        }
    }

    searchTaskByDate(dateString) {
        const inputDate = new Date(dateString);
        console.log("The tasks are found:");

        const inputDateISO = inputDate.toISOString().split('T')[0] + 'T' + inputDate.toISOString().split('T')[1].split('.')[0];
        const foundTasks = this.tasks.filter(task => {
            const taskCreateDate = new Date(task.createdAt);

            const createdDateISO = taskCreateDate.toISOString().split('T')[0] + 'T' + taskCreateDate.toISOString().split('T')[1].split('.')[0];
            return createdDateISO === inputDateISO
        });

        if (foundTasks.length > 0) {
            const formattedTasks = foundTasks.map(task => {
            return `${task.id}. ${task.title}. Date of created: ${inputDateISO}`;
            });

            return formattedTasks.join('\n');
        } else {
            return `The tasks aren't found.`;
        }
    }

    sortByStatus(idSort) {
        this.tasks.sort((taskA, taskB) => {
            const statusOrder = ['Created', 'InProgress', 'Done'];
            const aIndex = statusOrder.indexOf(taskA.status);
            const bIndex = statusOrder.indexOf(taskB.status);

            return idSort ? bIndex - aIndex : aIndex - bIndex;
        });

        const formattedTasks = this.tasks.map(task => `${task.id}. ${task.title} (Status: ${task.status})`);
        return formattedTasks.join('\n');
    }
    sortByDate(idSortDate) {
        const compareTasks = (taskA, taskB) => {
            return idSortDate ? taskB.createdAt - taskA.createdAt : taskA.createdAt - taskB.createdAt;
        };
        this.tasks.sort(compareTasks);
        const formattedTasks = this.tasks.map(task => {
            const date = new Date(task.createdAt);
            return `${task.id}. ${task.title} (Created: ${date.toLocaleString()})`;
        });
        return formattedTasks.join('\n');
    }
}

const task1 = new Task(1,'Create first task','Created','Freeman');
const task2 = new Task(2,'Create second task','Created','Smith');
const task3 = new Task(3,'To do HW15','Created','Ziablova');

const todoList = new TodoList();

todoList.addTask(task1);
todoList.addTask(task2);
todoList.addTask(task3);

console.log(todoList.showTasks());
console.log(task2.getFullInfoTasks())
console.log(todoList.searchTaskByDate('2024-11-23T15:07:33'))