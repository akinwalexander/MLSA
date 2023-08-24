const tasks = [];

const addTasks = (newTasks)=> {
    tasks.push(...newTasks);
};

const logTasks = () => {
    console.log(tasks);
};

module.exports = {
    addTasks,
    logTasks
};