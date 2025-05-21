import styled from "styled-components";
import { AiFillCalendar } from "react-icons/ai";
import { TiHome } from "react-icons/ti";
import { BiSolidUser } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 


const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 25.125rem;
  height: 3.0625rem;
  padding: 0.3125rem 3.5rem;
  gap: 4.2rem;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const IconContainer = styled.div`
  display: flex;
  width: 3rem;
  gap: 0.08rem;
  flex-direction: column;
  align-items: center;
  cursor: pointer; // ✅ 클릭 가능하게 표시
`;

const IconText = styled.h4`
  color: rgba(0, 0, 0, 0.5);
  font-family: Inter;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

const iconStyle = `
  width: 1.25rem;
  height: 1.25rem;
  color: rgba(0, 0, 0, 0.5);
`;

const CalendarIcon = styled(AiFillCalendar)`
  ${iconStyle}
`;
const HomeIcon = styled(TiHome)`
  ${iconStyle}
`;
const UserIcon = styled(BiSolidUser)`
  ${iconStyle}
`;
const FriendIcon = styled(FaUserFriends)`
  ${iconStyle}
`;

export default function NavBar() {
  const navigate = useNavigate(); 

  // 공통 클릭 핸들러
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <NavContainer>
      <IconContainer onClick={() => handleClick("/calender")}>
        <CalendarIcon />
        <IconText>달력</IconText>
      </IconContainer>
      <IconContainer onClick={() => handleClick("/main")}>
        <HomeIcon />
        <IconText>홈</IconText>
      </IconContainer>
      <IconContainer onClick={() => handleClick("/friend")}>
        <FriendIcon />
        <IconText>친구</IconText>
      </IconContainer>
      <IconContainer onClick={() => handleClick("/mypage")}>
        <UserIcon />
        <IconText>마이</IconText>
      </IconContainer>
    </NavContainer>
  );
}
