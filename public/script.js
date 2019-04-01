$(()=>{

  let todobox = $('#newtodo')
  let addtodobtn = $('#addtodo')
  let todolist = $('#todolist')

  addtodobtn.click(()=>{
    let newtodo = todobox.val()

    $.post(
      '/todos/',
      {task : newtodo},
      (data)=>{
        todolist.empty()
        for(todo of data){
          todolist.append(`<li>`+ todo.task + `</li>`)
        }
      }
    )
  })
})