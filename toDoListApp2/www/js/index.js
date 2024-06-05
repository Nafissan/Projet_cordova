function ajouterTask() {
    const task = document.getElementById('task');
    const taskList = document.getElementById('taskList');
    if (task.value) {
        let newItem = document.createElement('li');
        newItem.innerHTML = task.value;
        taskList.appendChild(newItem);
        attachSwipeEvents(newItem);
        $(taskList).listview('refresh');
    }
    task.value = '';
    task.focus();
}

function reinitialiserList() {
    const task = document.getElementById('task');
    const taskList = document.getElementById('taskList');
    const taskListDone = document.getElementById('taskListDone');
    task.value = '';
    taskList.innerHTML = '';
    taskListDone.innerHTML = '';
    task.focus();
}

function attachSwipeEvents(item) {
    $(item).on('swiperight', function() {
        const currentList = $(this).parent();
        if (currentList.attr('id') === 'taskList') {
            $('#taskListDone').append(this);
        } else {
            $('#taskList').append(this);
        }
        $('#taskList').listview('refresh');
        $('#taskListDone').listview('refresh');
    });

    $(item).on('swipeleft', function() {
        $(this).hide('slow', function() {
            $(this).remove();
            $('#taskList').listview('refresh');
            $('#taskListDone').listview('refresh');
        });
    });
}

$(document).ready(function() {
    $('#taskList, #taskListDone').listview().listview('refresh');
});
