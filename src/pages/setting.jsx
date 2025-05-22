import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ChooseButton = styled.div`
  width: 15rem;
  height: 4rem;
  display: flex;
  background-color: #71c2f4;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: black;
  border-radius: 1rem;
  margin-top: 1rem;
  &:hover {
    transform: scale(1.1);
  }
`;

export default function Setting() {
  const navigate = useNavigate();

  const gotoPage = (path) => {
    navigate(path);
  };

  return (
    <PageContainer>
      <ChooseButton onClick={() => gotoPage("/bestfriend")}>bestfriend</ChooseButton>
      <ChooseButton onClick={() => gotoPage("/calender")}>calender</ChooseButton>
      <ChooseButton onClick={() => gotoPage("/calenderdepth")}>calenderdepth</ChooseButton>
      <ChooseButton onClick={() => gotoPage("/fixsign")}>fixsign</ChooseButton>
      <ChooseButton onClick={() => gotoPage("/friend")}>friend</ChooseButton>
      <ChooseButton onClick={() => gotoPage("/info")}>info</ChooseButton>
      <ChooseButton onClick={() => gotoPage("/login")}>login</ChooseButton>
      <ChooseButton onClick={() => gotoPage("/main")}>main</ChooseButton>
      <ChooseButton onClick={() => gotoPage("/mypage")}>mypage</ChooseButton>
      <ChooseButton onClick={() => gotoPage("/signin")}>signin</ChooseButton>
      <ChooseButton onClick={() => gotoPage("/mypagedepth")}>my2</ChooseButton>
      <ChooseButton onClick={() => gotoPage("/addplanmodal")}>addplanmodal</ChooseButton>
      <ChooseButton onClick={() => gotoPage("/addinfomodal")}>addinfomodal</ChooseButton>
    </PageContainer>
  );
}
