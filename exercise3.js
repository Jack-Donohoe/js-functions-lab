fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const uncompleted = json.filter(todo => (todo.completed != true)).map(({userId,title}) => {return [userId,title]});
     console.log(uncompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });