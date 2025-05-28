import styled from "styled-components";
import { FaXmark } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FriendsendModal from "./Friendsendmodal";
const PageContainer = styled.div`
    width: 25.125rem;
    height: 17.125rem;
    flex-direction: Column;
    display: flex;
    background-color: #FFF;
    padding : 0rem;
    box-sizing: border-box;
    border-radius: 0.625rem;
    background: #FFF;
`

const HeaderContainer = styled.div`
    width: 25.125rem;
    height: 2.9375rem;
    flex-shrink: 0;
    background-color: white;
    padding: 0.5rem 1.44rem 0.5rem 8.7rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: Row;
    justify-content: center;
    align-items: center;
    gap: 5.5rem;
`

const AddFriendText = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
`
const CancelIcon = styled(FaXmark)`
   width: 1.3rem;
    height: 1.3rem;
    flex-shrink: 0;
    fill: #635F5F;
    box-sizing: border-box;
    display: flex;
`
const SearchContainer = styled.div`
    width: 25.125rem;
    height: 3.0625rem;
    flex-shrink: 0;
    background-color: white;
    padding: 0.5rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    `
const SearchBox = styled.div`
    width: 20.3125rem;
    height: 2.25rem;
    flex-shrink: 0;
    border-radius: 1.875rem;
    border: 1px solid #036;
    background: #FFF;
    padding: 0.5rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.44rem;
`
const SearchInputBox = styled.div`
    width: 20.3125rem;
    height: 2.25rem;
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Line = styled.div`
    width:0.0625rem;
    height: 2.25rem;
    background-color:#036;
`
const SearchInputName = styled.input`
    width: 7.75rem;
    height: 1.7rem;
    border-right: 1px solid #036;
    border: none;
`

const SearchInputNumber = styled.input`
    width: 7.75rem;
    height: 1.7rem;
    border: none;
    margin-left: 0.5rem;
`
const SearchIcon = styled(FaSearch)`
    width: 0.75rem;
    height: 0.82863rem;
    flex-shrink: 0;
    fill: #036;
`
const FriendContainer = styled.div`
    width: 25.125rem;
    height: 6.1875rem;
    flex-shrink: 0;
    background-color: white;
    padding: 0.6rem;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`
const FriendBox = styled.div`
    width: 20.3125rem;
    height: 4.75rem;
    flex-shrink: 0;
    border-radius: 0.4375rem;
    background: #F0F4F8;
    padding: 0.8rem 10rem 0.9rem 1.25rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.87rem;
`
const Myimg = styled.div`
    width: 3.125rem;
    height: 3.125rem;
    flex-shrink: 0;
    border-radius: 3.125rem;
    background: #C4C4C4;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`
const FriendBox2 = styled.div`
    width: 4.875rem;
    height: 3.5625rem;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: flex-start;
    display: flex;
    gap: 0.3rem;
    padding: 0rem;
    text-align: left;
    box-sizing: border-box;
    padding: 0.1rem;
`
const FriendName = styled.div`  
    text-align: left;    
    font-family: Inter;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: flex-start;
    
`
const FriendInfo = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const AddButtonContainer = styled.div`
    width: 25.125rem;
    height: 5.125rem;
    display: flex;
    flex-shrink: 0;
    background-color: white;
    padding: 2.12rem 0rem 0rem 0rem;
    box-sizing: border-box;
`
const AddButton = styled.div`
    display: flex;
    width: 25.125rem;
    padding: 0.75rem;
    justify-content: center;
    align-items: center;
    background: #96EAFF;
    color: #FFF;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export default function Friendaddmodal(){

    const [name, setName] = useState("");
    const [studentNumber, setStudentNumber] = useState("");
    const [friendInfo, setFriendInfo] = useState(null);

    const myStudentNumber = "20231234";
    //모달창 띄우기 위한 상태관리
    const [ModalOpen, setModalOpen] = useState(false);
    const OnClickAddButton = () => {
      setModalOpen(true); // 모달 열기
    };
    const closeModal = () => {
      setModalOpen(false);
    };

    

    const handleSearch = () => {
        if (name && studentNumber) {
          setFriendInfo({ name, studentNumber });
        } else {
          alert("이름과 학번을 모두 입력해주세요.");
        }
      };

    
      const handleAddFriend = async () => {
        try {
            
            const response = await axios.post("https://mini1team.lion.it.kr/api/friends/add", {
            "studentNumber": myStudentNumber,
            "friendStudentNumber": studentNumber
          });
          console.log("success", response.data);
          
          alert("친구가 추가되었습니다!");
          setFriendInfo(null);
          setName("");
          setStudentNumber("");
        } catch (error) {
          alert("친구 추가에 실패했습니다.");
          console.error(error);
          console.log(myStudentNumber, studentNumber);
          
        }
      };



    return(
        <>
            <PageContainer>
                <HeaderContainer>
                    <AddFriendText>친구 추가하기</AddFriendText>
                    <CancelIcon onClick={closeModal} style={{ cursor: 'pointer' }} />
                </HeaderContainer>

                <SearchContainer>
                    <SearchBox>
                        <SearchIcon onClick={handleSearch}/> 
                        <SearchInputBox>
                            <SearchInputName placeholder="이름" value={name} onChange={(e) => setName(e.target.value)}/> 
                            <Line />
                            <SearchInputNumber placeholder="학번" value={studentNumber} onChange={(e) => setStudentNumber(e.target.value)}/>
                        </SearchInputBox>
                    </SearchBox>
                </SearchContainer>

                {friendInfo && (
                  <FriendContainer>
                      <FriendBox>
                          <Myimg/>
                          <FriendBox2>
                              <FriendName>{friendInfo?.name}</FriendName>
                              <FriendInfo>멋사 13기</FriendInfo>
                          </FriendBox2>
                      </FriendBox>
                  </FriendContainer>
                )}

                <AddButtonContainer>
                    <AddButton onClick={OnClickAddButton}>추가하기</AddButton>
                </AddButtonContainer>
            </PageContainer>
            {ModalOpen && (
                <div style={{
                  position: 'fixed',
                  top: 0, left: 0, right: 0, bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 999
                }}>
                  <FriendsendModal onClose={closeModal} friendName={friendInfo?.name} friendStudentNumber={friendInfo?.studentNumber} />
                </div>
              )}
            </>
    )
}