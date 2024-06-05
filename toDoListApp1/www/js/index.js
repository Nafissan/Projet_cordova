function ajouterTask() {
    const task = document.getElementById('task');
    const taskList = document.getElementById('taskList');
            if (task.value) {
                let newItem = document.createElement('li');
                newItem.innerHTML= task.value;
                taskList.appendChild(newItem);
                $(newItem).on('swiperight',function(e){
                    $(this).toggleClass('done');
                })
                $(newItem).on('swipeleft',function(e){
                    $(this).hide('slow',function(){
                        $(this).remove();
                    });
                })
        $(taskList).listview('refresh');
    }
    task.value = '';
    task.select();
}

function reinitialiserList() {
    const task = document.getElementById('task');
    const taskList = document.getElementById('taskList');
    task.value = '';
    taskList.innerHTML = '';
    task.focus();
}
