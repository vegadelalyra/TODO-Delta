
        const todo = [
            { title: 'Burger', status: 'Complete'},
            { title: 'Pizza', status: 'Incomplete' }
        ]
        const app = document.querySelector('#app')
        const iterate = () => todo.forEach(task => {
            if (todo.length != 0) document.getElementById('secret').innerHTML = ''
            app.innerHTML += `
                <li style='list-style':none; class='${task.title}'> <button id='${task.title}' class='but'>X</button> ${task.title} - ${task.status} <input class='checker' id='${task.title}' style='scale: 1.5; position:relative; top:3px' type='checkbox' ${task.status == 'Complete'? 'checked' : ''}></li>
            `
            const button = document.querySelectorAll('.but')
            .forEach( button => {
                button.addEventListener('click', e => {  
                    todo.splice(todo.findIndex(el => el.title == e.target.id), 1)
                    app.innerHTML = ''
                    iterate()
                    if (todo.length == 0) return document.getElementById('secret').innerHTML = "<h2> ¡ LO HAS LOGRADO, HAS CUMPLIDO TUS TAREAS ! :D</h2"
                })
            })
            const checkers = document.querySelectorAll('.checker')
            .forEach( checker => { 
                checker.addEventListener('input', e => {
                    let task = todo.find(el => el.title == `${e.target.id}`)
                    e.target.checked == false ? task.status = 'Incomplete' : task.status = 'Complete'
                    app.innerHTML = ''
                    iterate()
                })
            })
        })
        iterate()
        const form = document.querySelector('.form')
        form.addEventListener('submit', e => { 
            e.preventDefault()
            let task = {
                title: e.target[0].value, 
                status: `${e.target[1].checked == false ? 'Incomplete' : 'Complete'}`
            }
            todo.push(task)
            app.innerHTML = ``
            iterate()
         })

console.log('HOLI FROM CODESPACES')
document.querySelector('ul').onchange = () => console.log('CHANGE ON LI HEHE')