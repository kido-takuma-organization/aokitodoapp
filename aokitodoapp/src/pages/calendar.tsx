import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

const CalendarPage = () => {
  // 初期値を Date オブジェクトで設定
  const [date, setDate] = useState<Date | Date[] | undefined>(new Date());

  const handleDateChange = (newDate: Date | Date[] | null) => {
    // newDate が null でない場合にのみ state を更新
    setDate(newDate ?? undefined);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">ToDo Calendar</h1>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
    </div>
  );
}

export default CalendarPage;