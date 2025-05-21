import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';

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

  /* 날짜 셀 패딩 수정 */
  .react-calendar__tile {
    padding-top: 15px !important;
    padding-bottom: 15px !important;
  }

  /* 배경, 보더 등 다른 커스텀 */
  .react-calendar {
    background: white;
    border: 1px solid #a0a096;
    font-family: 'Arial', 'Helvetica', sans-serif;
    line-height: 1.125em;
  }

  .react-calendar__navigation {
    background-color: red;
    height: 44px;
    margin-bottom: 1em;
  }

  .react-calendar__month-view__weekdays {
    font-size: 0.75em;
    font-weight: bold;
  }
`;



export default function Calender(){
    return(
        <PageContainer>
            <DayCalendar />
        </PageContainer>
    )
}
