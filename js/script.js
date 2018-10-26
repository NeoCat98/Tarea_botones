window.onload = init;
   function init() {
    let todoList = {
        listHTML: document.getElementById("todoList"),
        listTask: [],
        add(task, priority = false) {
            let element = document.createElement("li");
            element.innerText = task;
            //buton para tachar
            let buttonM = document.createElement("button");
            element.appendChild(buttonM);
            buttonM.innerHTML = "tachar";
            buttonM.addEventListener("click", () => {
                element.style.textDecoration = "line-through";
            });
            //boton para eliminar
            let buttonD = document.createElement("button");
            buttonD.innerHTML = "eliminar";
            buttonD.addEventListener("click", () => {
                element.remove();
            });
            
            element.appendChild(buttonD);
            // Añadir un boton para marcar de finalizado
            // Elmine de la lista
             if (priority) {
                 this.listTask.unshift({
                     element,
                     task
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task
                 });
                 this.listHTML.appendChild(element);
             }
         }
     }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(task, form.important.checked);

     });
 }