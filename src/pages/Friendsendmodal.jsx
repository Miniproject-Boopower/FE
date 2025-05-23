import styled from "styled-components";

const PageContainer = styled.div`
width: 25.125rem;
height: 17.125rem;
border-radius: 0.625rem;
background: #FFF;
padding: 4.44rem 0.69rem 0.69rem 1.81rem;
box-sizing: border-box;
display: flex;
flex-direction: column;
gap: 1rem;
`
const RequestContainer = styled.div`
    width: 23.8125rem;
    height: 2.125rem;
    flex-shrink: 0;    
    color: #000;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
`
const RequestContainer2 = styled.div`
    width: 23.8125rem;
    height: 5.1875rem;
    flex-shrink: 0;
    color: #000;
    display: flex;
    justify-content: center;
    padding: 1.6rem 5.3rem 0.5rem 5.3rem;
    box-sizing: border-box;

`
const RequestButton = styled.div`
    width: 12.75rem;
    height: 3rem;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    border-radius: 0.4375rem;
    background: #96EAFF;
    color: #FFF;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const CancelContainer = styled.div`
    width: 23.8125rem;
    height: 1.5rem;
    flex-shrink: 0;
    color: rgba(0, 0, 0, 0.50);
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function FriendsendModal(){
    return(
        <PageContainer>
            <RequestContainer>옥민희 님에게 친구 요청을 보낼까요?</RequestContainer>
            
            
            <RequestContainer2>
                <RequestButton>친구 요청 보내기</RequestButton>
            </RequestContainer2>
            
            <CancelContainer>취소</CancelContainer>
        </PageContainer>
    )
}