fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.reduce(function(obj,todo){
        return obj + (todo.completed);
     },0);
     console.log(completed)
  })
  .catch(function(err) { 
    console.log(err);
  }); 