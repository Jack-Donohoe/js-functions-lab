fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     let todoTitles = [];

     for(let i = 0; i < json.length; i++){
        todoTitles[i] = json[i].title;
     }

     console.log(todoTitles)
  })
  .catch(function(err) { 
    console.log(err);
  });