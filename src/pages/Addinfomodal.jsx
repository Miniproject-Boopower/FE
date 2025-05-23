import styled from "styled-components";
import { FaRegCheckCircle } from "react-icons/fa"
import Slider from '@mui/material/Slider';
import { useState } from "react";

const ScheduleListWrapper = styled.div`
    width: 25rem;
    max-height: 8rem; 
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 0;
    box-sizing: border-box;
`;

const PageContainer = styled.div`
    width: 25rem;
    height: 35rem;
    flex-direction: Column;
    display: flex;
    background-color: #FFF;
    padding : 0rem;
    box-sizing: border-box;
    border-radius: 1rem;
`
const ButtonContainer = styled.div`
    width: 25rem;
    height: 5rem;
    flex-shrink: 0;
    background-color: white;
    padding: 1.81rem;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const InfoContainer = styled.div`
    display: flex;
    width: 4.9375rem;
    height: 1.375rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 1.875rem;
    background: #94E8FD;
    color: #1B0C0C;
    font-family: Inter;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const TodoWriteContainer = styled.div`
    width: 25rem;
    height: 4.6875rem;
    flex-shrink: 0;
    background-color: white;
    padding: 0.75rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const TodoWrite = styled.input`
    display: flex;
    width: 20.0625rem;
    height: 3.1875rem;
    padding: 0.81rem;
    align-items: center;
    flex-shrink: 0;
    border-radius: 0.4375rem;
    background: #F0F4F8;
    padding: 0.75rem;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    color: #949494;
    font-family: Inter;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
`
const ImporContainer = styled.div`
    width: 25rem;
    height: 2.125rem;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 17.18rem 0rem 3.76rem;
    box-sizing: border-box;
    `
const ImporContainer2 = styled.div`
    width: 25rem;
    height: 2.4375rem;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    box-sizing: border-box;
    padding: 0rem 3.8rem 0rem 3.7rem;
    `
const ImporTextBox = styled.div`
    color: #8A8A8A;
    font-family: Inter;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const ImporTextBox2 = styled.div`
    color: #8A8A8A;
    font-family: Inter;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const CheckIcon = styled(FaRegCheckCircle)`
    width: 1.36375rem;
    height: 1.36rem;
    flex-shrink: 0;
    fill: #949494;
`
const InfoControlContainer = styled.div`
    width: 25rem;
    height: 2.9375rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ScheduleContainer = styled.div`
    width: 25rem;
    height: 3.375rem;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 0.9rem;
    box-sizing: border-box;
    flex-direction: row;
    gap: 0.94rem;
`
const ScheduleBox = styled.div`
    display: flex;
    width: 2.1875rem;
    height: 2.1875rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 0.625rem;
    background: #96EAFF;
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const ScheduleBox2 = styled.div`
    width: 16.5rem;
    height: 2.625rem;
    flex-shrink: 0;
    display: flex;
    padding: 0.5rem;
    box-sizing: border-box;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0.625rem;
    background: #F0F4F8;
    color: #000;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    `

const TwoButtonContainer = styled.div`
    width: 25rem;
    height: 3.75rem;
    flex-shrink: 0;
    padding: 0.5rem;
    box-sizing: border-box;
    gap: 1.62rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
const EnrollButton = styled.div`
    display: flex;
    width: 6.875rem;
    height: 2.1875rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 0.1875rem;
    border: 1px solid #8A8A8A;
    background: #FFF;
    color: #8A8A8A;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    `
const AddButton = styled.div`
    display: flex;
    width: 6.875rem;
    height: 2.1875rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 0.1875rem;
    background: #96EAFF;
    color: #FFF;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`
const TextContainer = styled.div`
    width: 25rem;
    height: 2.5rem;
    flex-shrink: 0;
    color: #8A8A8A;
    font-family: Inter;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4); // 어두운 배경
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; // 페이지 위로 올라오게
`;

const ModalWrapper = styled.div`
  position: relative;
  z-index: 1000; // 실제 모달 내용
  border-radius: 1rem;
`;
export default function AddinfoModal({ onClose, onSubmit }) {
    const [importValue, setImportValue] = useState(1);
    const [content, setContent] = useState("");
    const [schedules, setSchedules] = useState([]);

    const handleAddSchedule = () => {
        if (content.trim() === "") return;
        const newSchedule = {
            importance: importValue,
            title: content,
        };
        setSchedules([...schedules, newSchedule]);
        setContent("");
        setImportValue(1);
    };

      const handleSubmit = () => {
    if (typeof onSubmit === "function") {
      onSubmit(schedules); 
    } else {
      console.error("onSubmit is not a function");
    }
  };

    return (
        <Overlay>
            <ModalWrapper>
                <PageContainer>
                    <ButtonContainer>
                        <InfoContainer>
                            중요도: {importValue}
                        </InfoContainer>
                    </ButtonContainer>

                    <TodoWriteContainer>
                        <TodoWrite 
                            placeholder="일정 이름 입력"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </TodoWriteContainer>

                    <ImporContainer>
                        <ImporTextBox>중요도 설정</ImporTextBox>
                    </ImporContainer>
                    <ImporContainer2>
                        <CheckIcon />
                        <ImporTextBox2>
                            일정이나 할 일의 중요도를 표시해주세요. 표시한 중요도는<br />
                            친한 친구에게도 공유됩니다!
                        </ImporTextBox2>
                    </ImporContainer2>

                    <InfoControlContainer>
                        <Slider
                            value={importValue}
                            min={1}
                            max={5}
                            step={1}
                            marks
                            valueLabelDisplay="auto"
                            onChange={(e, newValue) => setImportValue(newValue)}
                            sx={{ color: '#96EAFF', width: '20.0625rem' }}
                        />
                    </InfoControlContainer>
                    <ScheduleListWrapper>
                        {schedules.map((schedule, index) => (
                            <ScheduleContainer key={index}>
                                <ScheduleBox>{schedule.importance}</ScheduleBox>
                                <ScheduleBox2>{schedule.title}</ScheduleBox2>
                            </ScheduleContainer>
                        ))}
                    </ScheduleListWrapper>
                    <TwoButtonContainer>
                        <EnrollButton onClick={handleSubmit}>등록하기</EnrollButton>
                        <AddButton onClick={handleAddSchedule}>추가하기</AddButton>
                    </TwoButtonContainer>

                    <TextContainer>
                        일정을 추가하고 한 번에 등록이 가능합니다.
                    </TextContainer>
                </PageContainer>
            </ModalWrapper>
        </Overlay>
    );
}