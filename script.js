const form = document.getElementById('form');
const todocontainer = document.getElementById('todoitems');
const fullname = document.getElementById('fullname');
const todotext = document.getElementById('todo');
const stars = document.getElementById('todotype');
const del = document.getElementById('del');
const todos = [];


renderlist();

function renderlist() {
    const list = todos.map(function(e) {
        return `<li> ${e.fullname} </br>  ${e.comment}  ${e.stars} </li>`;
    });

    let alltodos = list.reduce(function(total, curr) {
        return total + curr;
    }, "");

    todocontainer.innerHTML = alltodos;

};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(fullname.value);
    console.log(todotext.value);
    console.log(stars.value);

    let newtodo = {
        fullname: fullname.value,
        comment: todotext.value,
        stars: stars.value,
    };


    todos.push(newtodo);
    renderlist();
});

del.addEventListener('click', function(e) {
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
})