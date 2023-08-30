const http = require("http")
const {todos, showTodos} = require("./controller")

http.createServer(async function (req, res){

    res.writeHead(200, { 'Content-Type': 'application/json' });

    if (req.url === "/todos") {  // adding "/todos" shows all the todo list
        const todosData = await todos();
        res.end(JSON.stringify(todosData));
    } else if (req.url === "/showTodos") {  // adding "/showTodos" to the port shows the first 15 tasks
        const showTodosData = await showTodos();
        res.end(showTodosData);
    } else {
        res.end("Invalid route");
    }
}).listen(8080);




//     res.write(todos);
//     res.write(showTodos);
//     res.end()


// }).listen(8080)