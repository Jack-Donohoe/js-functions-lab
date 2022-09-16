fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed = json.reduce(function(obj,todo){
        if (todo.completed == true){
        if (obj[todo.userId] != null){
          obj[todo.userId] += 1;
        } else {
            obj[todo.userId] = 1;
        }
    }
        return obj;
       },[]);
       console.log(completed);
  })
  .catch(function(err) { 
    console.log(err);
  });