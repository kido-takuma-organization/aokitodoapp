import { Task } from '../types/Task';

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h2 className="text-xl font-semibold">{task.name}</h2>
      <p className="text-gray-600">Due: {task.dueDate}</p>
    </div>
  );
}

export default TaskCard;