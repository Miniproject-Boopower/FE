import styled from "styled-components"
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const PageContainer = styled.div`
    width: 25.125rem;
    height: 54.625rem;
    flex-direction: Column;
    display: flex;
    background-color: #FFC3C3;
    padding : 0 2.5rem;
    box-sizing: border-box;
    padding-top : 6rem;
    padding-bottom : 1.94rem;
    `
const SubjectContainer = styled.div`
    width: 20.125rem;
    height: 11.75rem;
    flex-shrink: 0;
    background-color: yellow;
    padding: 0rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: Column;
    justify-content: center;
    align-items: center;
    `
const InfoContainer = styled.div`
    width: 20.125rem;
    height: 2.6875rem;
    flex-shrink: 0;
    background-color:white;
    padding: 0.63rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.37rem;
    color: #8A8A8A;
    font-family: Inter;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    `
const SubjectContainer3 = styled.div`
    width: 20.125rem;
    height: 3.5625rem;
    flex-shrink: 0;
    padding: 0.4rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: Row;
    justify-content: center;
    align-items: center;
    gap: 0.63rem;
    `
const SubjectContainerWrite = styled.div`
    width: 16.5rem;
    height: 2.625rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    background: #F0F4F8;
    `
const SubjectContainer4 = styled.div`
    width: 20.125rem;
    height: 2.3125rem;
    flex-shrink: 0;
    padding: 0.44rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: Row;
    justify-content: center;
    align-items: center;
    `
const EnterInfoContainer = styled.div`
    width: 20.125rem;
    height: 10.125rem;
    flex-shrink: 0;
    background-color: white;
    padding: 3.06rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: Column;
    justify-content: center;
    align-items: center;
    `
const ReactIcon = styled.div`
    width: 1.3675rem;
    height: 1.3675rem;
    flex-shrink: 0;
    background-color: red;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const EnterInfo = styled.div`
    width: 18.5rem;
    height: 4rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    background: #96EAFF;
    flex-direction: Column;
    justify-content: center;
    align-items: center;
    color: #FFF;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    text-align: center;
    font-family: Inter;
    `
const CheckIcon = styled(FaRegCheckCircle)`
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    fill: #94E8FD;
    `
const InfoIcon = styled(IoIosInformationCircleOutline)`
    width: 0.9375rem;
    height: 0.9375rem;
    flex-shrink: 0;
    fill: #94E8FD;
    `
const PlusIcon = styled(FaPlus)`

`
export default function Info(){
    return(
        <PageContainer>
            <SubjectContainer>
                <InfoContainer>
                    <InfoIcon/><p>lms에서 자동으로 과목이 크롤링됩니다. 학교 교과과목이<br></br>아닌 과목을 입력해주세요.</p>
                </InfoContainer>
                <SubjectContainer3>
                    <CheckIcon/>
                    <SubjectContainerWrite></SubjectContainerWrite>
                </SubjectContainer3>
                 <SubjectContainer3>
                    <CheckIcon/>
                    <SubjectContainerWrite></SubjectContainerWrite>
                </SubjectContainer3>
                <SubjectContainer4>

                </SubjectContainer4>
                
            </SubjectContainer>
            <SubjectContainer>
                <InfoContainer>
                </InfoContainer>
                <SubjectContainer3>
                    <CheckIcon/>
                    <SubjectContainerWrite></SubjectContainerWrite>
                </SubjectContainer3>
                 <SubjectContainer3>
                    <CheckIcon/>
                    <SubjectContainerWrite></SubjectContainerWrite>
                </SubjectContainer3>
                <SubjectContainer4>
                </SubjectContainer4>
            </SubjectContainer>
            <SubjectContainer>
                <InfoContainer>
                    
                </InfoContainer>
                <SubjectContainer3>
                    <CheckIcon/>
                    <SubjectContainerWrite></SubjectContainerWrite>
                </SubjectContainer3>
                 <SubjectContainer3>
                    <CheckIcon/>
                    <SubjectContainerWrite></SubjectContainerWrite>
                </SubjectContainer3>
                <SubjectContainer4>

                </SubjectContainer4>
            </SubjectContainer>
            <EnterInfoContainer>
                <EnterInfo>
                    정보입력
                </EnterInfo>
            </EnterInfoContainer>
        </PageContainer>
    )
}
