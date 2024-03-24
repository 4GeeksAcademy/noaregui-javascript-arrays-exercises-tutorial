let tasks = [
  { label: "Eat my lunch", done: true },
  { label: "Make the bed", done: false },
  { label: "Have some fun", done: false },
  { label: "Finish the replits", done: false },
  { label: "Finish my exercises", done: true },
  { label: "Ask for a raise", done: false },
  { label: "Read a book", done: true },
  { label: "Make a trip", done: false },
];

// Your code here
//.filter(añadelo al array siempre y cuando se cumpla la condición entre()
/* let newArray = tasks.filter(function(tareas)) { 
      return tarea ===true;
      }
    }*/
let newArray = tasks.filter(tareas => tareas.done === true); 
/*tienes que decirle donde está el true, tareas hará referencia a tasks pero puede tener cualquier nombre.
Entonces dentro de tasks en el apartado done, tendrá que ser true*/
console.log(newArray);
