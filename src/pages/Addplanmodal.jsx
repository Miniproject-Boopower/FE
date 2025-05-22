import styled from "styled-components"
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";


const PageContainer = styled.div`
    width: 25rem;
    height: 23.875rem;
    flex-direction: Column;
    display: flex;
    background-color: #FFF;
    padding : 0 1.4rem;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    `
const HeaderContainer = styled.div`
    width: 25rem;
    height: 4.375rem;
    flex-shrink: 0;
    background-color: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: Row;
    gap: 12.44rem;
    `

const IconContainer = styled.div`
    width: 8.5rem;
    height: 4.375rem;
    flex-shrink: 0;
    background-color: white;
    padding: 1.44rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: Row;
    justify-content: center;
    align-items: center;
    gap: 0.47rem;
    `
const IconContainer2 = styled.div`
    width: 4.0625rem;
    height: 4.375rem;
    flex-shrink: 0;
    background-color: white;
    padding: 1.56rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ArrowIcon = styled(BiSolidLeftArrow)`
    width: 0.7rem;
    height: 0.7rem;
    flex-shrink: 0;
    fill: #8A8A8A;
    box-sizing: border-box;
    display: flex;
`
const ArrowIcon2 = styled(BiSolidRightArrow)`
    width: 0.7rem;
    height: 0.7rem;
    flex-shrink: 0;
    fill: #8A8A8A;
    box-sizing: border-box;
    display: flex;
`
const DayContainer = styled.div`
    display: flex;
    width: 3.6875rem;
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
const CancelIcon = styled(FaXmark)`
    width: 1.3rem;
    height: 1.3rem;
    flex-shrink: 0;
    fill: #635F5F;
    box-sizing: border-box;
    display: flex;
`
const ButtonContainer = styled.div`
    width: 25rem;
    height: 6.125rem;
    flex-shrink: 0;
    background-color: white;
    padding: 2.4rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.44rem;
    padding-top: 2.63rem;
    padding-bottom: 0.81rem;
    `
const DayButton = styled.div`
    width: 9.75rem;
    height: 2.6875rem;
    flex-shrink: 0;
    border-radius: 0.4375rem;
    background: #96EAFF;
    color: #FFF;
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    `

const TodoButton = styled.div`
    width: 9.75rem;
    height: 2.6875rem;
    flex-shrink: 0;
    border-radius: 0.4375rem;
    border: 1px solid #8A8A8A;
    background: #FFF;
    color: #8A8A8A;
    text-align: center;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    `
const DayInputContainer = styled.div`
    width: 25rem;
    height: 4.5625rem;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.7rem;
    box-sizing: border-box;
    background-color: white;
`
const DayInpute = styled.input`
    display: flex;
    width: 20.0625rem;
    height: 3.1875rem;
    padding: 0.8rem;
    box-sizing: border-box;
    align-items: center;
    flex-shrink: 0;
    border-radius: 0.4375rem;
    background: #F0F4F8;
    border: none;
    `
const ImporContainer = styled.div`
    width: 25rem;
    height: 2.125rem;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.44rem 15rem 0rem 2.94rem;
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

const AddContainer = styled.div`
    width: 25rem;
    height: 4.1875rem;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.9rem;
    `

const AddButton = styled.div`
    display: flex;
    height: 2.1875rem;
    padding: 0.37rem;
    justify-content: flex-end;
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

export default function Addplanmodal (){
    return (
            <PageContainer>
                <HeaderContainer>
                    <IconContainer>
                        <ArrowIcon/><DayContainer>5월7일</DayContainer><ArrowIcon2/>
                    </IconContainer>
                    <IconContainer2>
                        <CancelIcon/>
                    </IconContainer2>
                </HeaderContainer>
                

                <ButtonContainer>
                    <DayButton>일정</DayButton>
                    <TodoButton>할 일</TodoButton>
                </ButtonContainer>


                <DayInputContainer>
                    <DayInpute placeholder="일정 이름 입력"/>
                </DayInputContainer>


                <ImporContainer>
                    <ImporTextBox>중요도 체크</ImporTextBox>
                </ImporContainer>
                <ImporContainer2>
                    <CheckIcon/>
                    <ImporTextBox2>체크표시를 눌러 일정이나 할 일의 중요도를 표시해주세요.<br></br>표시한 중요도는 친한 친구에게도 공유됩니다!</ImporTextBox2>
                </ImporContainer2>

                
                <AddContainer>
                    <AddButton>추가하기</AddButton>
                </AddContainer>
            </PageContainer>


    )
}

