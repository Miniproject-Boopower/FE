import styled from "styled-components"
// import BooLogo from "../svg"

const PageContainer = styled.div`
    width: 25.125rem;
    height: 54.625rem;
    flex-direction: Column;
    display: flex;
    background-color: white;
    padding : 0 3.5rem;
    box-sizing: border-box;
    padding-top : 15.44rem;
    padding-bottom : 5.19rem;
    gap: 3.5rem; `


const Box = styled.div`
    width: 18.125rem;
    height: 15.25rem;
    flex-shrink: 0;
    background-color: white;
    padding: 2.90rem;
    box-sizing: border-box;
    gap: 1.44rem;
    display: flex;
    flex-direction: Column;
    justify-content: center;
    align-items: center;
    color: #8A8A8A;
    text-align: center;
    font-family: Inter;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    `
    const Box2 = styled.div`
    width: 18.125rem;
    height: 15.25rem;
    flex-shrink: 0;
    background-color: white;
    padding: 1rem;
    box-sizing: border-box;
    gap: 1.44rem;
    display: flex;
    flex-direction: Column;
    justify-content: center;
    align-items: center;
    color: #8A8A8A;
    text-align: center;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    `

const SigninContainer = styled.div`
    width: 15.625rem;
    height: 3.125rem;
    flex-shrink: 0;
    background-color: blue;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 0.3125rem;
    background: #96EAFF;
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    `
    const SigninContainer2 = styled.div`
    width: 15.625rem;
    height: 3.125rem;
    flex-shrink: 0;
    background-color: blue;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 0.3125rem;
    border: 1px solid #8A8A8A;
    background: #FFF;
    color: #8A8A8A;
    text-align: center;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    `

const WarringText = styled.p`
    margin: 0;
    margin-top: 0rem;
    font-size: 0.625rem;
    color: #8A8A8A;
`
const Img = styled.img`
    width: 3.125rem;
    height: 3.125rem;
    background-color: red;
    border-radius: 3.125rem;
    `

export default function Login(){
    return(
        <PageContainer>
            <Box2>
                <p>계획 세우기도 힘이니까! <br></br>BOO력!</p>
            </Box2>
            <Box>
                <SigninContainer>
                    <p>로그인</p>
                </SigninContainer>
                <SigninContainer2>
                    <p>회원가입</p>
                </SigninContainer2>
                <WarringText>eclass 아이디로 가입해주세요!</WarringText>
            </Box>
        </PageContainer>
        
    )
}

