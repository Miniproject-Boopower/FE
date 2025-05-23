import styled from "styled-components";
import { FaRegCheckCircle } from "react-icons/fa"

const PageContainer = styled.div`
    width: 25rem;
    height: 29.4375rem;
    flex-direction: Column;
    display: flex;
    background-color: #FFF;
    padding : 0rem;
    box-sizing: border-box;
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
    background-color: #FFC3C3;
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
export default function AddinfoModal(){
    return(
        <PageContainer>
            <ButtonContainer>
                <InfoContainer>
                    중요도: 4
                </InfoContainer>
            </ButtonContainer>
            
            <TodoWriteContainer>
                <TodoWrite placeholder="일정 이름 입력"/>
            </TodoWriteContainer>

            <ImporContainer>
                    <ImporTextBox>중요도 설정</ImporTextBox>
                </ImporContainer>
                <ImporContainer2>
                    <CheckIcon/>
                    <ImporTextBox2>체크표시를 눌러 일정이나 할 일의 중요도를 표시해주세요.<br></br>표시한 중요도는 친한 친구에게도 공유됩니다!</ImporTextBox2>
                </ImporContainer2>

                <InfoControlContainer>

                </InfoControlContainer>

                <ScheduleContainer>
                    <ScheduleBox>4</ScheduleBox>
                    <ScheduleBox2>비즈니스 시계열분석 팀플</ScheduleBox2>
                </ScheduleContainer>

                <ScheduleContainer>
                    <ScheduleBox>4</ScheduleBox>
                    <ScheduleBox2>비즈니스 시계열분석 팀플</ScheduleBox2>
                </ScheduleContainer>

                <TwoButtonContainer>
                    <EnrollButton>등록하기</EnrollButton>
                    <AddButton>추가하기</AddButton>
                </TwoButtonContainer>

                <TextContainer>
                    일정을 추가하고 한 번에 등록이 가능합니다.
                </TextContainer>


        </PageContainer>
    )
}