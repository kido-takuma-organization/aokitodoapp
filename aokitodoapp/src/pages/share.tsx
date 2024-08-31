import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const SharePage = () => {
  const [sharedTasks, setSharedTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const querySnapshot = await getDocs(collection(db, 'tasks'));
      const tasks: any[] = [];
      querySnapshot.forEach((doc) => {
        tasks.push(doc.data());
      });
      setSharedTasks(tasks);
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold">Shared ToDo List</h1>
      <div className="mt-4">
        {sharedTasks.map((task, index) => (
          <div key={index} className="bg-white shadow-md rounded p-4 mb-4">
            <h2 className="text-xl font-semibold">{task.name}</h2>
            <p className="text-gray-600">Due: {task.dueDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SharePage;