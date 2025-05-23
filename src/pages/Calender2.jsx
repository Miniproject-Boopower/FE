import styled from "styled-components"
import { useState } from "react"
import { MdPlayArrow } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { useLocation } from 'react-router-dom';




const PageContainer = styled.div`
    width: 25.125rem;
    height: 54.625rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding : 4.5rem 1.65rem 4.5rem 1.65rem;
    box-sizing : border-box ;
    gap : 2.37rem;
    `

const HeaderContianer = styled.div`
    width : 12.75rem;
    height : 2.25rem;
    display: flex;
    flex-direction: row;
    gap : 0.65rem;
    align-items: center;
    justify-content: center;
`

const LeftArrow = styled(MdPlayArrow)`
    width: 2rem;
    height: 2rem;
    fill: #8A8A8A;
    transform: scaleX(-1);
    display : flex;
    border-radius: 1rem;
`

const RightArrow = styled(MdPlayArrow)`
    width: 2rem;
    height: 2rem;
    fill: #8A8A8A;
    display : flex;
    border-radius: 1rem;
`

const DayText = styled.h1`
    color: #030202;
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin :0 ;
`

const MemotopContainer = styled.div`
    width : 21.81rem;
    height : 0.94rem;
    display: flex;
    flex-direction: row;
    gap : 1rem;
`
const MemodownContainer = styled.div`
    width : 21.81rem;
    height : 28.81rem;
    display: flex;
    flex-direction: column;
    padding : 1.9rem;
    align-items: center;
`

const MemoContainer = styled.div`
    width : 21.81rem;
    height : 29.75rem;
    display : flex;
    flex-direction: column;
    background: #F0F4F8;
    align-items: center;
`

const ButtonContainer = styled.div`
    width : 18.5rem;
    height : 8.81rem;
    display: flex;
    flex-direction: column;
    gap : 0.81rem;
`
const AddButton = styled.div`
    width: 18.5rem;
    height: 4rem;
    border-radius: 0.4375rem;
    background: #96EAFF;
    color : #FFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`
const BackButton = styled.div`
    width: 18.5rem;
    height: 4rem;
    border-radius: 0.4375rem;
    border: 2px solid #949494;
    background: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
`
const MemomiddleContainer = styled.div`
    width: 0.4375rem;
    height :0.94rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MemoTip = styled.div`
    width : 0.19rem;
    height : 0.5rem;
    background-color: #FFFF;
`

const MemoCircle = styled.div`
    width : 0.44rem;
    height : 0.44rem;
    background-color: #FFFF;
    border-radius: 10rem;
    display: flex;
    z-index: 1;
    margin-bottom : 0.1rem;
`

const CheckIcon = styled(MdOutlineCheckBox)`
    width: 1.25rem;
    height: 1.25rem;
`

const BoxIcon = styled(MdCheckBoxOutlineBlank)`
    width: 1.25rem;
    height: 1.25rem;
`

const WriteContainer = styled.div`
  width: 17.87rem;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #E3DEDE;
  justify-content: space-between;
`

const TextAndIcon = styled.div`
  display: flex;
  align-items: center;
`

const WriteText = styled.h2`
  margin: 0;
  color: #000;
  font-family: Inter;
  font-size: 0.75rem;
  font-weight: 400;
  margin-left: 0.56rem;
`

const ImportBox = styled.div`
  width: 2.63756rem;
  height: 1.1875rem;
  border-radius: 1rem;
  display: flex;
  background-color: #94E8FD;
  color: #535353;
  font-family: Inter;
  font-size: 0.75rem;
  font-weight: 400;
  justify-content: center;
  align-items: center;
`

export default function CalenderDepth() {
  const location = useLocation();
  const { year, month, day } = location.state || {};


  const [selectedDate, setSelectedDate] = useState(new Date(year, month - 1, day));

  const toggleChecked = () => setChecked(prev => !prev);
  const [checked, setChecked] = useState(false);
  const memoItems = Array(20).fill(0);

  const handlePrevDay = () => {
    const prevDate = new Date(selectedDate);
    prevDate.setDate(prevDate.getDate() - 1);
    setSelectedDate(prevDate);
  };

  const handleNextDay = () => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setSelectedDate(nextDate);
  };

  const currentYear = selectedDate.getFullYear();
  const currentMonth = selectedDate.getMonth() + 1;
  const currentDay = selectedDate.getDate();

  return (
    <PageContainer>
      <HeaderContianer>
        <LeftArrow onClick={handlePrevDay} />
        <DayText>{currentMonth}월 {currentDay}일</DayText>
        <RightArrow onClick={handleNextDay} />
      </HeaderContianer>

      <MemoContainer>
        <MemotopContainer>
          {memoItems.map((_, index) => (
            <MemomiddleContainer key={index}>
              <MemoTip />
              <MemoCircle />
            </MemomiddleContainer>
          ))}
        </MemotopContainer>

        <MemodownContainer>
          <WriteContainer>
            <TextAndIcon>
              {checked ? (
                <CheckIcon onClick={toggleChecked} />
              ) : (
                <BoxIcon onClick={toggleChecked} />
              )}
              <WriteText>데이터사이언스 응용 eclass 강의 듣기</WriteText>
            </TextAndIcon>
            <ImportBox>중요</ImportBox>
          </WriteContainer>
        </MemodownContainer>
      </MemoContainer>

      <ButtonContainer>
        <AddButton>일정/할일 추가하기</AddButton>
        <BackButton>뒤로가기</BackButton>
      </ButtonContainer>
    </PageContainer>
  )
}