import styled from "styled-components";
import { useState } from "react";
import axios from "axios"; // axios import 추가
import { useNavigate } from "react-router-dom";
const PageContainer = styled.div`
  width: 25.125rem;
  height: 54.625rem;
  flex-direction: Column;
  display: flex;
  background-color: white;
  padding: 0 3.5rem;
  box-sizing: border-box;
  padding-top: 15.44rem;
  padding-bottom: 5.19rem;
  gap: 2.5rem;
  align-items: center;
`;

const Box = styled.div`
  width: 18.125rem;
  height: 15.25rem;
  flex-shrink: 0;
  background-color: white;
  padding: 2.9rem;
  box-sizing: border-box;
  gap: 1.44rem;
  display: flex;
  flex-direction: Column;
  justify-content: center;
  align-items: center;
  color: #8a8a8a;
  text-align: center;
  font-family: Inter;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

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
  color: #8a8a8a;
  text-align: center;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SigninContainer = styled.div`
  width: 15.625rem;
  height: 3.125rem;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 0.3125rem;
  background: #96eaff;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

const SigninContainer2 = styled.div`
  width: 15.625rem;
  height: 3.125rem;
  flex-shrink: 0;
  background-color: blue;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 0.3125rem;
  border: 1px solid #8a8a8a;
  background: #fff;
  color: #8a8a8a;
  text-align: center;
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const WarringText = styled.p`
  margin: 0;
  margin-top: 0rem;
  font-size: 0.625rem;
  color: #8a8a8a;
`;

const IdInput = styled.input`
  width: 13.75rem;
  height: 1.87rem;
  border-radius: 1rem;
  border: 1px solid #8a8a8a;
  background: #fff;
`;

const PasswordInput = styled.input`
  width: 13.75rem;
  height: 1.87rem;
  border-radius: 1rem;
  border: 1px solid #8a8a8a;
  background: #fff;
`;

const InputContainer = styled.div`
  width: 15.75rem;
  height: 4.31rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.56rem;
`;

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://mini1team.lion.it.kr/api/v1/user/login", {
        "studentNumber" :id ,
        "password" : password,
      });
      console.log("Login success:", response.data);
      navigate("/info");
    } catch (error) {
      console.error("Login failed:", error);
      alert("로그인 실패. 아이디와 비밀번호를 확인하세요.");
    }
  };

  const handleSignin = () => {
    navigate("/signin");
  };

  return (
    <PageContainer>
      <Box2>
        <p>
          계획 세우기도 힘이니까! <br />
          BOO력!
        </p>
      </Box2>
      <InputContainer>
        <IdInput
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <PasswordInput
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputContainer>
      <Box>
        <SigninContainer onClick={handleLogin}>
          <p>로그인</p>
        </SigninContainer>
        <SigninContainer2 onClick={handleSignin}>
          <p>회원가입</p>
        </SigninContainer2>
        <WarringText>eclass 아이디로 가입해주세요!</WarringText>
      </Box>
    </PageContainer>
  );
}
