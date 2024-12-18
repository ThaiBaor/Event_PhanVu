const people = [
    {
        ID: 0,
        Name: 'Mr Thành',
        Department: 'CNTT'
    },
    {
        ID: 1,
        Name: 'Ms Trang',
        Department: 'CNTT'
    },
    {
        ID: 2,
        Name: 'Ms Chuyên',
        Department: 'CNTT'
    },
    {
        ID: 3,
        Name: 'Mr Quốc Anh',
        Department: 'CNTT'
    },
    {
        ID: 4,
        Name: 'Mr  Đông',
        Department: 'CNTT'
    },
    {
        ID: 5,
        Name: 'Mr Bảo',
        Department: 'CNTT'
    },
    {
        ID: 6,
        Name: 'Mr Phi Vũ',
        Department: 'CNTT'
    },
    {
        ID: 7,
        Name: 'Mr Thành Vũ',
        Department: 'CNTT'
    },
    {
        ID: 8,
        Name: 'Mr  Đại',
        Department: 'CNTT'
    },
    {
        ID: 9,
        Name: 'Mr Chánh',
        Department: 'HCNS'
    },
    {
        ID: 10,
        Name: 'Ms Hạnh',
        Department: 'HCNS'
    },
    {
        ID: 11,
        Name: 'Ms Kiều Yến',
        Department: 'HCNS'
    },
    {
        ID: 12,
        Name: 'Ms Trinh',
        Department: 'HCNS'
    },
    {
        ID: 13,
        Name: 'Mr Dũng',
        Department: 'HCNS'
    },
    {
        ID: 14,
        Name: 'Mr Khanh',
        Department: 'HCNS'
    },
    {
        ID: 15,
        Name: 'Ms Hiền',
        Department: 'HCNS'
    },

    {
        ID: 16,
        Name: 'Ms Dung',
        Department: 'HCNS'
    },
    {
        ID: 17,
        Name: 'Ms Lý',
        Department: 'HCNS'
    },
    {
        ID: 18,
        Name: 'Mr Vinh',
        Department: 'TCKT'
    },
    {
        ID: 19,
        Name: 'Mr Tùng',
        Department: 'TCKT'
    },
    {
        ID: 20,
        Name: 'Ms Thoa',
        Department: 'TCKT'
    },
    {
        ID: 21,
        Name: 'Ms Mai',
        Department: 'TCKT'
    },
    {
        ID: 22,
        Name: 'Ms Vân',
        Department: 'TCKT'
    },
    {
        ID: 23,
        Name: 'Ms Yến',
        Department: 'TCKT'
    },
    {
        ID: 24,
        Name: 'Ms Hoài',
        Department: 'TCKT'
    },
    {
        ID: 25,
        Name: 'Ms Quyên',
        Department: 'TCKT'
    },
    {
        ID: 26,
        Name: 'Mr Cương',
        Department: 'TCKT'
    },
    {
        ID: 27,
        Name: 'Mr Quân',
        Department: 'TCKT'
    },
    {
        ID: 28,
        Name: 'Ms Hồng',
        Department: 'TCKT'
    },
    {
        ID: 29,
        Name: 'Ms Nhã',
        Department: 'TCKT'
    },
    {
        ID: 30,
        Name: 'Ms Châu',
        Department: 'TCKT'
    }
]
const gift = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
const shuffle_button = document.getElementById('shuffle-button');
const loading = document.getElementById('loading');
function createPeopleTable(data) {
    // Create a new table element
    const table = document.createElement('table');
    table.classList.add('table');
    table.classList.add('table-striped');
    table.setAttribute('id', 'people-table');
    // Create the table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    // 1
    const th1 = document.createElement('th');
    th1.textContent = 'STT';
    headerRow.appendChild(th1);
    //2
    const th2 = document.createElement('th');
    th2.textContent = 'Tên';
    headerRow.appendChild(th2);
    //3 
    const th3 = document.createElement('th');
    th3.textContent = 'Bộ Phận';
    headerRow.appendChild(th3);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create the table body
    const tbody = document.createElement('tbody');
    tbody.classList.add('table-group-divider');
    for (const rowData of data) {
        const row = document.createElement('tr');
        for (const key in rowData) {
            const td = document.createElement('td');
            td.textContent = key === 'ID' ? rowData[key] + 1 : rowData[key];
            row.appendChild(td);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);

    // Append the table to a specific element (e.g., a div with ID 'table-container')
    const tableContainer = document.getElementById('people-table-container');
    tableContainer.appendChild(table);
}
function createGiftTable(data) {
    const table = document.createElement('table');
    table.classList.add('table');
    table.classList.add('table-striped');
    table.setAttribute('id', 'gift-table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const th = document.createElement('th');
    th.textContent = 'Số Quà';
    headerRow.appendChild(th);
    thead.appendChild(headerRow);
    table.appendChild(thead);
    const tbody = document.createElement('tbody');
    tbody.classList.add('table-group-divider');
    for (const rowData of data) {
        const row = document.createElement('tr');
        const td = document.createElement('td');
        td.textContent = rowData+1;
        row.appendChild(td);
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    const tableContainer = document.getElementById('gift-table-container');
    tableContainer.appendChild(table);
}
function removeTable() {
    const people_table = document.getElementById('people-table');
    const gift_table = document.getElementById('gift-table');
    people_table.remove();
    gift_table.remove();
}
shuffle_button.addEventListener('click', () => {
    removeTable();
    loading.hidden = false;
    shuffle_button.hidden = true
    setTimeout(()=>{
        loading.hidden = true;
        shuffle_button.hidden = false
        createPeopleTable(people.sort(() => Math.random() - 0.5));
        createGiftTable(gift.sort(() => Math.random() - 0.5));
    },3000);
})
setTimeout(() => {
    loading.hidden = true;
    shuffle_button.hidden = false
    createPeopleTable(people);
    createGiftTable(gift);
}, 3000)
