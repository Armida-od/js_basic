console.log("HW14")
//1. Вам необхідно створити конструктор Студента, у якого мають бути властивості: ім'я, прізвище, рік народження, оцінки, відвідуваність, курс.
//Кількість оцінок і відвіданих занять залежить від курсу, на якому займається студент.
//Так само у Студента є методи: додати оцінку, додати відвідування, отримати середню успішність, отримати середнє відвідування,
//отримати кількість пройдених занять, змінити курс (мають оновитися дані про курс), а також отримати всю інформацію про студента.
//2. Додати Студенту можливість навчатися на кількох курсах з можливістю додавання і видалення курсу.
//3. Створити конструктор Група, яка має список студентів і методи для додавання, видалення студентів, а також одержання рейтингу студентів за відвідуваністю і успішністю.

class Student {
    constructor({firstName, secondName, yearBirth, grades, attendance, courses}) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.yearBirth = yearBirth;
        this.grades = grades;
        this.attendance = attendance;
        this.courses = courses;
    }

    //Полная информация
    getFullStudent() {
        const courses = Object.keys(this.grades);
        let resultGrades = '';
        for (let i = 0; i < courses.length; i++) {
            const course = courses[i];
            const grades = Object.values(this.grades)[i];
            resultGrades += `на курсе ${course}: ${grades.join(', ')}; `;
        }

        let resultAttended = '';
        for (const course in this.attendance) {
            const attended = this.attendance[course];
            const max = this.courses[course].maxAttendance;
            const percentage = ((attended / max) * 100).toFixed(2);
            resultAttended += `\n* ${course}: ${attended} из ${max} (${percentage}%)`;
        }

        return `Студент ${this.firstName} ${this.secondName}, год рождения: ${this.yearBirth}.` +
        `\nОбучается на курсах: ${courses}` +
        `\nИмеет следующие оценки: ${resultGrades}` +
        `\nСтудент посетил: ${resultAttended}`

    }

    //Добавление оценки
    addRate(courseName, rate) {
        const gradeCourse = this.grades[courseName];
        if (gradeCourse) {
            if (typeof rate !== 'number') {
                return `Оценка должна быть числом.`;
            }

            // Проверяем и инициализируем массив оценок
            this.grades[courseName] = gradeCourse || [];
            gradeCourse.push(rate);

            return `Оценка ${rate} добавлена. Все оценки по курсу ${courseName}: ${gradeCourse.join(', ')}.`;
        } else {
            return `Курс ${courseName} не найден.`;
        }
    }
    //Добавление количества посещений
    addAttendance(courseName, addAtt = 1){
        const attendanceCourse = this.attendance[courseName];
        if (attendanceCourse) {
            if (addAtt === attendanceCourse.maxAttendance) {
                return `Студент посетил все занятия.`;
            }
            return `${addAtt} новых посещения добавлено. Было посещений: ${attendanceCourse}. После обновления общее количество посещений = ${attendanceCourse + addAtt}.`;
        } else {
            return `Курса ${courseName} не существует для этого студента.`;
        }
    }
    //Вывод средней оценки студента
    getAverageScore(courseName) {
        const grades = this.grades[courseName] || [];
        if (grades.length === 0) {
            return 'Нет оценок для этого курса';
        }
        const sum = grades.reduce((acc, grade) => acc + grade, 0);
        const average = sum / grades.length;
        return `Средняя оценка студента в курсе ${courseName} = ${average.toFixed(1)}`;
    }

    getAverageAttendance(courseName) {
        const course = this.attendance[courseName];
        if (!course) {
            return 'Нет данных о посещениях для этого курса';
        }
        return (`На курсе ${courseName} студент посетил ${(course * 100 / this.courses[courseName].maxAttendance).toFixed(1)}% занятий`);
    }

    getPassedLessons(courseName){
        const course = this.attendance[courseName];
        if (!course) {
            return 'Нет данных о посещениях для этого курса';
        }
        return (`На курсе ${courseName} студент посетил ${this.attendance[courseName]} занятий `);
    }

    changeCourse(otherCourseName) {
        if (!this.courses[otherCourseName]) {
            return `Курса ${otherCourseName} не существует`;
        }
        if (this.currentCourse) {

            delete this.courses[this.currentCourse];
        }
        this.currentCourse = otherCourseName;
        return `Курс изменился на "${otherCourseName}"`;
    }

    getCourses() {
        const courses = Object.keys(this.courses);
        if (courses.length === 0) {
            return 'Студент не записан ни на один курс.';
        }
        return 'Студент занимается на следующих курсах:\n' + courses.map((course, index) => `${index + 1}. ${course}`).join('\n');
    }

    addCourse(courseName, maxAttendance) {
        if (!this.courses[courseName]) {
            this.courses[courseName] = {
                maxAttendance,
                attendance: 0,
                grades: []
            };
            return `Курс ${courseName} добавлено и содержит ${maxAttendance} занятий`;
        } else {
            return `Студент уже учится на курсе ${courseName}.`;
        }
    }

    removeCourse(courseName) {
        if (this.courses[courseName]) {
            delete this.courses[courseName];
            return `Курс ${courseName} удалено.`;
        } else {
            return `Студент не учится на курсе ${courseName}.`;
        }
    }
}
const student1 = new Student({
    firstName: 'Андрей',
    secondName: 'Иванов',
    yearBirth: 2000,
    grades: {
        'JS developer': [60, 58, 75, 100],
        'QA Manual': [65, 78, 70, 90]
    },
    attendance: {
        'JS developer': 18,
        'QA Manual': 10
    },
    courses:{
        'JS developer': {maxAttendance: 20},
        'QA Manual': {maxAttendance: 18}
    }
});

const student2 = new Student({
    firstName: 'Игорь',
    secondName: 'Миланов',
    yearBirth: 1985,
    grades: {
        'JS developer': [70, 59, 85, 95],
        'QA Manual': [100, 78, 88, 90]
    },
    attendance: {
        'JS developer': 20,
        'QA Manual': 15
    },
    courses:{
        'JS developer': {maxAttendance: 20},
        'QA Manual': {maxAttendance: 18}
    }
});

const student3 = new Student({
    firstName: 'Элания',
    secondName: 'Свердлова',
    yearBirth: 2008,
    grades: {
        'JS developer': [90, 95, 93, 100],
        'QA Manual': [95, 100, 100, 98]
    },
    attendance: {
        'JS developer': 20,
        'QA Manual': 18
    },
    courses:{
        'JS developer': {maxAttendance: 20},
        'QA Manual': {maxAttendance: 18}
    }
});

console.log(student1.getFullStudent());
console.log('------------Методы, применимые к студенту на курсе \'JS developer\'------------')
console.log(student1.addRate('JS developer', 100));
console.log(student1.addAttendance('JS developer', 2));
console.log(student1.getAverageScore('JS developer'));
console.log(student1.getAverageAttendance('JS developer'));
console.log(student1.getPassedLessons('JS developer'));
console.log('~~~~~~~~~~~~~Изменение курса~~~~~~~~~~~~~')

console.log(student1.changeCourse('QA Manual'))

console.log(student1.getCourses());
console.log(student1.addCourse('Java Basic', 33));
console.log(student1.removeCourse('Java Basic'));

//Создание группы
console.log("~~~~~~~~~~~~~Class Group~~~~~~~~~~~~~")
class Group {
    constructor(name) {
        this.name = name;
        this.students = [];
    }
    getStudentsList() {
        if (this.students.length === 0) {
            return 'Группа пуста. Студентов нет.';
        } else {
            return this.students;
        }
    }
    addStudent(...students) {
        this.students.push(...students);

        console.log('Обновленный список студентов:');
        this.students.forEach(student => {
            return `Студент ${this.students.indexOf(student) + 1}:`;
        });
    }

    removeStudent(student) {
        const index = this.students.indexOf(student);

        if (index !== -1) {
            this.students.splice(index, 1);
            return `Студент ${student.firstName} ${student.secondName} удален.`;
        } else {
            return `Студент ${student.firstName} ${student.secondName} не найден.`;
        }
    }

    calculateRatings() {
        const results = [];
        this.students.forEach(student => {
            for (const course in student.grades) {
                const totalGrade = student.grades[course].reduce((sum, grade) => sum + grade, 0);
                const averageGrade = totalGrade / student.grades[course].length;
                const rating = Math.ceil(averageGrade / 10);

                const attendancePercentage = (student.attendance[course] / student.courses[course].maxAttendance) * 100;
                const attendanceRating = Math.ceil(attendancePercentage / 20); // Примерная шкала: каждые 20% посещаемости - 1 балл рейтинга

                results.push(`${student.firstName} ${student.secondName} получил рейтинг ${rating} по оценкам и ${attendanceRating} по посещаемости на курсе ${course}`);
            }
        });
        return results;
    }

}
const devs = new Group('Developers');

console.log(devs.getStudentsList());
devs.addStudent(student1, student2, student3);
console.log(devs.getStudentsList());
console.log(devs.removeStudent(student2));
console.log(devs.getStudentsList())
console.log(devs.calculateRatings())


