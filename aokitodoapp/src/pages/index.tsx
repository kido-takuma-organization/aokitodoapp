import { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import { setReminder } from '../utils/reminder';

const tasks = [
  { id: '1', name: 'Buy groceries', dueDate: '2024-09-10', reminderDays: 1 },
  { id: '2', name: 'Finish project report', dueDate: '2024-09-15', reminderDays: 3 },
  // 他のタスクを追加
];

const Home = () => {
  const [taskList, setTaskList] = useState(
    tasks.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
  );

  useEffect(() => {
    taskList.forEach(task => {
      setReminder(task.dueDate, task.reminderDays);
    });
  }, [taskList]);

  return (
    <div>
      <h1 className="text-4xl font-bold">ToDo List</h1>
      <div className="mt-4">
        {taskList.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Home;