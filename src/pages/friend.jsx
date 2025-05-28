import styled from "styled-components";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";
import api from "../axios";
import { useEffect } from "react";

//리액트 아이콘
const Arrow = styled(FaArrowLeft)`
    width: 1.56rem;
    height: 1.44rem;
    font-size: 1.56rem;
`;

const AddPerson = styled(MdOutlinePersonAddAlt)`
    width: 1.94rem;
    height: 1.81rem;
    font-size: 1.94rem;
`;

const Magnify = styled(FaMagnifyingGlass)`
    width: 0.94rem;
    height: 0.94rem;
    font-size: 0.94rem;
    color: black;
`;

const TrashCan = styled(BiTrash)`
`;
const Heart = styled(FaHeart)`
`;


//전체
const PageContainer = styled.div`
    width: 25.125rem;
    height: 51.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border: black;
    `;

//헤더
const Header = styled.div`
    width: 25.125rem;
    height: 3.44rem;
    display: flex;
    padding: 1.25rem 1.31rem 0.75rem 1.31rem;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    box-sizing: border-box;
    font-size: 1.44rem;
`;

//검색창
const SearchArea = styled.div`
    width: 20.31rem;
    height: 3.81rem;
    display: flex;
    flex-direction: row;
    padding-top:1.56rem;
    background-color: white;
    box-sizing: border-box;

`;

const SearchBorder = styled.div`
    width:20.31rem;
    height: 2.25rem;
    display: flex;
    padding: 0.63rem 10.13rem 0.5rem 0.81rem;
    flex-direction: row;
    border-radius: 1.875rem;
    border: 1px solid #036;
    background: white;
    align-items: center;
    gap: 0.5rem;
    box-sizing: border-box;
`;

const SearchInput = styled.input`
    height: 1.25rem;
    display: flex;
    border: none;
    box-sizing: border-box;
`;


//친한친구 모든친구 영역
const FriendButtonArea = styled.div`
    width: 25.125rem;
    height: 4rem;
    display: flex;
    align-items: center;
    padding: 1.81rem 4.5rem 0.81rem 4.5rem;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    box-sizing: border-box;
    border-radius: 0rem 0rem 1.25rem 1.25rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.50);
`;

const AllFriend = styled.button`
    background-color: white;
    border:none;
    justify-content: space-around;
    color: #000;
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const CloseFriend = styled.button`
    background-color: white;
    border:none;
    justify-content: space-around;
    color: #000;
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;


//친구 리스트
const FriendListArea =styled.div`
    width: 25.12rem;
    height: 31.69rem;
    padding: 2.19rem 2.405rem 8.56rem 2.405rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    background-color: white;
    box-sizing: border-box;
`;

const FriendBar = styled.div`
    width: 20.31rem;
    height: 4.75rem; 
    padding: 0.81rem 1.12rem 0.75rem 1.19rem;
    border-radius: 0.44rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    background-color: #F0F4F8;
    box-sizing: border-box;
`;

const BarImageArea = styled.div`
    width: 4.19rem;
    height: 3.19rem;
    display: flex;
    background-color: #F0F4F8;
    box-sizing: border-box;
`;

const ProfileImg = styled.img`
    width: 3.19rem;
    height: 3.19rem;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: white;
`;

const BarInfoArea = styled.div`
    width: 11.81rem;
    height: 3.19rem;
    display: flex;
    flex-direction: column;
    gap: 0.19rem;
    background-color: #F0F4F8;
    box-sizing: border-box;
`;

const BarSelectArea = styled.div`
    width: 2rem;
    height: 3.19rem;
    display: flex;
    background-color: #F0F4F8;
    flex-direction: column;
    gap: 1.13rem;
    justify-content: center;
    box-sizing: border-box;
`;

const TrashButton = styled.button`
    width: 2rem;
    height: 1.5rem;
    color: Black;
    font-size: 1.25rem;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: none;
    background-color: #F0F4F8;
`;

const HeartButton = styled.button`
    width: 2rem;
    height: 1.5rem;
    color:  ${(props) => (props.$active ? "#94E8FD" : "#A9ABAB")}; ;
    font-size: 0.9375rem;
    align-items :center;
    justify-content: center;
    box-sizing: border-box;
    border: none;
    background-color: #F0F4F8;
    cursor: pointer;
`;

export default function Friend(){
    const [isBestFriend, setIsBestFriend] = useState(false); // 기본값은 false
    const [friendList, setFriendList] = useState([]);

    const Stnum = localStorage.getItem("studentId");
    useEffect(() => {
        const fetchFriends = async () => {
          try {
            const res = await api.get("/api/friends/list", {
              params: {
                request: Stnum,
              },
            });
            setFriendList(res.data); 
          } catch (err) {
            console.error("친구 목록 불러오기 실패", err);
          }
        };
      
        fetchFriends();
      }, [Stnum]);

    const handleHeartClick = async () => {
        const endpoint = isBestFriend ? "/api/friends/unbest" : "/api/friends/best";
    
        try {
            await api.post(endpoint, {
                studentNumber: Stnum,
                friendStudentNumber: "20231234", // 이 부분은 실제 친구 번호로 바꿔야 함
                bestFriend: true,
            });
            setIsBestFriend(!isBestFriend); // 색상 토글
            alert(isBestFriend ? "친한 친구에서 해제됨!" : "친한 친구로 등록됨!");
        } catch (error) {
            console.error(error);
            alert("친한 친구 등록/해제에 실패했습니다.");
        }
    };

    return(

        <PageContainer>
            <Header>
                <FaArrowLeft />
                <h3>친구목록</h3>
                <MdOutlinePersonAddAlt />
            </Header>

            <SearchArea>
                <SearchBorder>
                    <FaMagnifyingGlass />
                    <SearchInput placeholder="친구를 추가해보세요!">
                    </SearchInput>
                </SearchBorder>
            </SearchArea>

            <FriendButtonArea>
                <AllFriend>모든친구</AllFriend>
                <CloseFriend>친한친구</CloseFriend>
            </FriendButtonArea>

            <FriendListArea>
                {friendList.map((friend) => (
                    <FriendBar key={friend.friendStudentNumber}>
                        <BarImageArea>
                            <ProfileImg src="https://cdn-icons-png.flaticon.com/512/570/570682.png" />
                        </BarImageArea>
                        <BarInfoArea>
                            <div>{friend.name}</div>
                            <div>{friend.generation || "멋사"}</div>
                        </BarInfoArea>
                        <BarSelectArea>
                            <TrashButton>
                                <BiTrash />
                            </TrashButton>
                            <HeartButton
                                onClick={() => handleHeartClick(friend.friendStudentNumber)}
                                $active={friend.bestFriend}
                            >
                                <FaHeart />
                            </HeartButton>
                        </BarSelectArea>
                    </FriendBar>
                ))}
            </FriendListArea> 
        
        </PageContainer>
    )
}