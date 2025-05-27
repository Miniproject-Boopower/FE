import styled from "styled-components"
import { useState } from "react"

const PageContainer = styled.div`
    width: 25.125rem;
    height: 51.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border: black;
    padding: 14.56rem 4.405rem 5.06rem 4.405rem;
    `;

//상단 공백
const Header = styled.div`
    width: 25.125rem;
    height: 14.56rem;
    display: flex;
    background-color: white;
    box-sizing: border-box;
`;

//영역1
const CurrentPassArea = styled.div`
    width: 25.125rem;
    height: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0rem 4.405rem 0rem 4.405rem;
    background-color: white;
`;

const CurrentPass = styled.input`
    width: 16.56rem;
    height: 2.63rem;
    display: flex;
    border: 1px solid #949494;
    border-radius: 0.31rem;
    background: white;
    box-sizing: border-box;
`;

const CurrentPassMatch = styled.div`
    width: 16.56rem;
    height: 0.88rem;
    display: flex;
    border: none;
    padding: 0.05rem 0rem 0rem 1.81rem;
    color: #8A8A8A;
    font-family: Inter;
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: white;
    box-sizing: border-box;
`;

//영역2
const NewPassArea = styled.div`
    width: 25.125rem;
    height: 5.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.13rem 4.405rem 1rem 4.405rem;
    background-color: white;
    box-sizing: border-box;
`;

const NewPass = styled.input`
    width: 16.56rem;
    height: 2.63rem;
    display: flex;
    border: 1px solid #949494;
    border-radius: 0.31rem;
    background: white;
    box-sizing: border-box;
`;

//영역3
const PassCheckArea = styled.div`
    width: 25.125rem;
    height: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0rem 4.405rem 0rem 4.405rem;
    background-color: white;
    box-sizing: border-box;
`;

const PassCheck = styled.input`
    width: 16.56rem;
    height: 2.63rem;
    display: flex;
    border: 1px solid #949494;
    border-radius: 0.31rem;
    background: white;
    box-sizing: border-box;
`;

const PassCheckMatch = styled.div`
    width: 16.56rem;
    height: 0.87rem;
    display: flex;
    border: none;
    padding: 0.05rem 0rem 0rem 1.81rem;
    color: #8A8A8A;
    font-family: Inter;
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    background: white;
    box-sizing: border-box;
`;

//버튼 영역
const EditButtonArea = styled.div`
    width: 25.125rem;
    height: 15rem;
    display: flex;
    border: none;
    padding: 11.81rem 4.405rem 0rem 4.405rem;
    align-items: center;
    justify-content: center;
    background-color: white;
    box-sizing: border-box;
`;

const EditButton = styled.button`
    width: 15.625rem;
    height: 3.125rem;    
    border:none;
    justify-content: space-around;
    border-radius: 0.4375rem;
    background: #96EAFF;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    color: #FFF;
    line-height: normal;
`;


//버튼 영역
const BackButtonArea = styled.div`
    width: 25.125rem;
    height: 9.18rem;
    display: flex;
    border: none;
    padding: 1.31rem 4.405rem 0rem 5.06rem;
    align-items: center;
    justify-content: center;
    background-color: color;
    box-sizing: border-box;
`;

const BackButton = styled.button`
    width: 15.625rem;
    height: 3.125rem;    
    border:none;
    justify-content: space-around;
    border-radius: 0.3125rem;
    border: 1px solid #8A8A8A;
    background: white;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    color: #8A8A8A;
    line-height: normal;
`;





export default function FixSign(){

    const[data, setdata] = useState("")

    return(
        <PageContainer>
            <Header> </Header>

            <CurrentPassArea>
                <CurrentPass placeholder="현재 비밀번호"/>
                <CurrentPassMatch>
                    <div>비밀번호가 일치하지 않습니다.</div>
                </CurrentPassMatch>
            </CurrentPassArea>

            <NewPassArea>
                <NewPass placeholder="변경할 비밀번호"/>
            </NewPassArea>

            <PassCheckArea>
                <PassCheck placeholder="비밀번호 확인"/>
                <PassCheckMatch>
                    <div>비밀번호가 일치하지 않습니다.</div>
                </PassCheckMatch>
            </PassCheckArea>

            <EditButtonArea>
                <EditButton>수정</EditButton>
            </EditButtonArea>
            <BackButtonArea>
                <BackButton>뒤로가기</BackButton>
            </BackButtonArea>
        </PageContainer>
    )
}
