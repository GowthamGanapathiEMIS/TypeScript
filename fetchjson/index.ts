import axios from 'axios';

const URL = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
}

axios.get(URL).then((response) => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  console.log(`
    id is ${id}
    title is ${title}
  `);
});
