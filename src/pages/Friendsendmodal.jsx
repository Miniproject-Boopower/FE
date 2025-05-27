import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../axios";


const PageContainer = styled.div`
width: 25.125rem;
height: 17.125rem;
border-radius: 0.625rem;
background: #FFF;
padding: 4.44rem 0 0.69rem 0;
box-sizing: border-box;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
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

export default function FriendsendModal({ onClose, friendName, friendStudentNumber }){

    const [name, setName] = useState("");
    const [studentNumber, setStudentNumber] = useState("");
    const [friendInfo, setFriendInfo] = useState(null);

    const Stnum = localStorage.getItem("studentId");
    const handleAddFriend = async () => {
        try {
            
            const response = await api.post("/api/friends/add", {
            "studentNumber": Stnum,
            "friendStudentNumber": friendStudentNumber
          });
          console.log("success", response.data);
          
          alert("친구가 추가되었습니다!");
          setFriendInfo(null);
          setName("");
          setStudentNumber("");
        } catch (error) {
          alert("친구 추가에 실패했습니다.");
          console.error(error);
          console.log(Stnum, friendStudentNumber);
          
        }
      };


    return(
        <PageContainer>
            <RequestContainer>{friendName}님에게 친구 요청을 보낼까요?</RequestContainer>
            
            
            <RequestContainer2>
                <RequestButton onClick={handleAddFriend}>친구 요청 보내기</RequestButton>
            </RequestContainer2>
            
            <CancelContainer onClick={onClose}>취소</CancelContainer>
        </PageContainer>
    )
}