fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.reduce(todo => (todo.completed == true));
     console.log(completed);
  })
  .catch(function(err) { 
    console.log(err);
  });