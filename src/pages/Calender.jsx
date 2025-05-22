import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

const PageContainer = styled.div`
    width: 25.125rem;
    height: 54.625rem;
    display: flex;
    flex-direction: column;
    padding : 10rem 1.75rem 2.69rem 1.75rem;
    box-sizing: border-box;
    gap : 1.44rem;
    align-items: center;
    `

const DayCalendar = styled(Calendar)`
  width: 100%;
  height: 100%;
  border-radius: 1rem;

  /* 날짜 셀 패딩 수정 */
  .react-calendar__tile {
    padding-top: 15px !important;
    padding-bottom: 55px !important;
    border-radius: 8px; 
  }

  /* 배경, 보더 등 다른 커스텀 */
  .react-calendar {
  background: white;
  border: 1px solid #a0a096;
  font-family: 'Arial', 'Helvetica', sans-serif;
  line-height: 1.125em;
  overflow: hidden;    /* 내부 요소가 모서리를 넘지 않게 */
}

  .react-calendar__navigation {
    border-radius: 1rem;
    height: 44px;
    margin-bottom: 1em;
  }

  .react-calendar__month-view__weekdays {
    font-size: 0.75em;
    font-weight: bold;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
  background: #ffffa9;
}

.react-calendar__tile--now {
  background: pink;
}
`;

export default function Calender() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    console.log(`선택된 날짜: ${year}년 ${month}월 ${day}일`);
  };

  return (
    <PageContainer>
      <DayCalendar onChange={handleDateChange} value={selectedDate} />
    </PageContainer>
  );
}