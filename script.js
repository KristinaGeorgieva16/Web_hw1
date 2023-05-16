// Checks if a non-empty string is actually a number, i.e. contains only digits
function isNumeric(str){
    return !isNaN(str);
}

// Example data - it will be replaced by code extracting data from a database later
let arr = [
    { number: '0325', name: 'Мария Иванова', price: 12 },
    { number: '1772', name: 'Кристиан Георгиев', price: 42 },
    { number: '0853', name: 'Илиана Симеонова', price: 23 },
    { number: '0885', name: 'Михаил Станчев', price: 8 },
    { number: '2037', name: 'Пламена Велкова', price: 15 },
    { number: '1250', name: 'Ралица Илиева', price: 23 },
    { number: '0536', name: 'Александра Стоянова', price: 37 },
    { number: '1993', name: 'Диaна Димитрова', price: 18 },
    { number: '2054', name: 'Теодор Велинов', price: 15 },
    { number: '1576', name: 'Михаил Георгиев', price: 20 },
    { number: '1378', name: 'Георги Кирилов', price: 10 }
];

// tableBody - the invisible <tbody> element in the <table> element
let tableBody = document.getElementById('table').children[0];

for(let i = 0; i < arr.length; i++) {
    let tr = document.createElement('tr');

    for(let key in arr[i]) {
        let td = document.createElement('td');
        let value = arr[i][key];
        td.innerHTML = value;
        tr.appendChild(td);
    }

    tableBody.appendChild(tr);
}

function sortBy(column) {
    let rows = Array.from(tableBody.children);

    function compareRows(row1, row2) {
        let row1cells = Array.from(row1.children);
        let row2cells = Array.from(row2.children);

        let cell1 = row1cells[column];
        let cell2 = row2cells[column];

        let data1 = cell1.innerHTML;
        let data2 = cell2.innerHTML;

        if(isNumeric(data1) && isNumeric(data2)) {
            data1 = +data1;
            data2 = +data2;
        }

        if(data1 < data2) {
            return -1;
        }
        if(data1 > data2) {
            return 1;
        }
        return 0;
    }

    let headRow = rows[0];
    rows.shift();
    rows.sort(compareRows);
    rows.unshift(headRow);
    
    tableBody.innerHTML = '';
    
    for(let i = 0; i < rows.length; i++) {
        tableBody.appendChild(rows[i]);
    }
}