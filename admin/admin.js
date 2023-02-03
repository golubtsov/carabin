// ф-ия выводит заказы из бд
async function get_oders() {
    await fetch('http://localhost:3000/admin/')
        .then(data => data.json())
        .then(data => create_el_tab(data))
}

function create_el_tab(oders) {
    for (const el of oders) {
        document.querySelector('table').innerHTML += `
        <tr class="item">
            <td>${el.num_oder}</td>
            <td>${el.fname}</td>
            <td>${el.lname}</td>
            <td>${el.phone}</td>
            <td>${el.name_prod_count}</td>
            <td>${el.price} руб</td>
            <td>
                <button onclick="ready_oder('${el.num_oder}')" class="btn_ready">Заказ готов!</button>
            </td>
        </tr>
        `;
    }
}

async function ready_oder(el) {
    await fetch(`http://localhost:3000/admin/?id=${el}`, {
        method: 'DELETE',
    })
        .then(() => {
            window.location.reload();
        })
}

get_oders();