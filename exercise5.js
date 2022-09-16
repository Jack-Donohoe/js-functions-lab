fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed = json.reduce(function(obj,todo){
      if (todo.completed != true){
        obj.push(todo)
      }
      return obj;
     },[]);
     console.log(completed);
  })
  .catch(function(err) { 
    console.log(err);
  });