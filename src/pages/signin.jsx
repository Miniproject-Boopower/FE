import styled from "styled-components"

const PageContainer = styled.div`
    width: 25.125rem;
    height: 54.625rem;
    flex-direction: Column;
    display: flex;
    background-color: white;
    padding : 0 3.5rem;
    box-sizing: border-box;
    padding-top : 17.12rem;
    padding-bottom : 4.69rem;
    gap: 0.69rem;
    `
const Box = styled.div`
    width: 18.6875rem;
    height: 13.0625rem;
    flex-shrink: 0;
    background-color: white;
    padding: 1.3rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: Column;
    justify-content: center;
    align-items: center;
    color: #8A8A8A;
    font-family: Inter;
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    gap: 0.5rem;
    `
const Box2 = styled.div`
    width: 18.6875rem;
    height: 7.5rem;
    flex-shrink: 0;
    background-color: white;
    padding: 0.63rem;
    box-sizing: border-box;
    gap: 1rem;
    display: flex;
    flex-direction: Column;
    justify-content: center;
    align-items: center;
    `
const Box3 = styled.div`
    width: 18.6875rem;
    height: 10.875rem;
    flex-shrink: 0;
    background-color: white;
    padding: 3.87rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: Column;
    justify-content: center;
    align-items: center;
    `

const SigninContainer = styled.div`
    width: 15.625rem;
    height: 3.125rem;
    flex-shrink: 0;
    flex-direction: Column;
    justify-content: center;
    align-items: center;
    border-radius: 0.3125rem;
    background: #96EAFF;
    color: #FFF;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    text-align: center;
    font-family: Inter;
    `

const IdInput = styled.input`
    width: 16.5625rem;
    height: 2.625rem;
    flex-shrink: 0;
    border-radius: 0.3125rem;
    border: 1px solid #949494;
    background: #FFF;
    color: #8A8A8A;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    `
const PasswordInput = styled.input`
    width: 16.5625rem;
    height: 2.625rem;
    flex-shrink: 0;
    border-radius: 0.3125rem;
    border: 1px solid #949494;
    background: #FFF;
    color: #8A8A8A;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    `
const WarringText = styled.p`
    margin : 0;
    align-self: flex-start;
    text-align: left;
`   

export default function Signin(){
    return(
        <PageContainer>
            <Box>
                <IdInput placeholder="아이디(학번)" />
                <PasswordInput placeholder="비밀번호" />
                <WarringText>lms 비밀번호를 입력해주세요.</WarringText >
                <PasswordInput placeholder="비밀번호 확인" />
                <WarringText>비밀번호가 일치하지 않습니다.</WarringText>
            </Box>
            <Box2>
                <IdInput placeholder="이름" />
                <IdInput placeholder="전공" />
            </Box2>
            <Box3>
                <SigninContainer>
                    회원가입
                </SigninContainer>
            </Box3>
        </PageContainer>
    )
}
