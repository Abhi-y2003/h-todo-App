/*  todos will be an array and looks like this 

    todos =[
    {
        title:"Go to gym",
        description:"hell yeah"}
    ]
*/

export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed === true? ("Completed") : ("Mark as Completed")}</button>
          </div>
        );
      })}
    </div>
  );
}
