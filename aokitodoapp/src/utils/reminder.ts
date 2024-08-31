export const setReminder = (dueDate: string, reminderDays: number) => {
    const dueDateObj = new Date(dueDate);
    const reminderDate = new Date(dueDateObj.getTime() - reminderDays * 24 * 60 * 60 * 1000);
    const now = new Date();
  
    if (now > reminderDate) {
      console.log(`Reminder: Task is due soon!`);
    }
  }