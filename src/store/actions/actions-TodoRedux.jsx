export const TASK_ADDED = "TASK_ADDED";
export const TASK_FINISHED = "TASK_FINISHED";
export const TASK_DELETED = "TASK_DELETED";

export const taskAdd = (taskToAdd) =>
(
    {
        type: TASK_ADDED,
        taskToAdd: taskToAdd
    }
);

export const taskFinish = (taskToFinish) =>
(
    {
        type: TASK_FINISHED,
        taskToFinish: taskToFinish
    }
);

export const taskDelete = (taskToDelete) =>
(
    {
        type: TASK_DELETED,
        taskToDelete
    }
);
