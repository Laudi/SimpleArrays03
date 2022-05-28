let employees = [
    ['Jaylee Macy', 'marketing'],
    ['John Smith', 'management'],
    ['Blossom Hartley', 'design'],
    ['Austin Carpenter', 'marketing'],
    ['Joan Knowles', 'development'],
    ['Sally Nunez', 'management'],
    ['Laurel Ward', 'development'],
    ['Lark Simon', 'marketing'],
    ['Jane Stone', 'management'],
    ['Courtney Olson', 'development'],
];
let development = new Array();

for (i in employees) {
    let employer = employees[i];
    if (employer[1] === 'development') {
        development.push(employer[0]);
    }
}
console.log('developments are ' + development);

let isActive = true;
let members = ['First Member', 'Second Member'];

while (isActive = true) {
    let newMember = prompt('Введите имя для обновления очереди. Для завершения программы введите "=".');
    if (newMember == null) {
        break;
    } else if (newMember == '' || newMember == ' ') {
        if (members.length > 0) {
            console.log('Первый в очереди ' + members[0]);
            member = members.shift();
            console.log(`${member} удален из очереди`);
        } else {
            console.log('Очередь пуста');
        }

    } else if (newMember == '=') {
        //console.log(members);
        break;


    } else {
        members.push(newMember);
    }

}

console.log(members);

let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];

function minArray(userNum) {
    let minArr = Infinity;
    for (let i = 0; i < userNum.length; i++) {
        if (+userNum[i] < minArr) {
            minArr = userNum[i];
        }
    }
    console.log(minArr);
}

function sortArray(userArray) {
    let sortedArr = [];
    for (let i = 0; i < userArray.length; i++) {

    }


    //sortedArr.push(minArray(userArray));
}

sortArray(array);
//console.log(sortedArr);
//minArray(array);
minArray(array); // доработать
