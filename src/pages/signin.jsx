import styled from "styled-components"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const PageContainer = styled.div`
  width: 25.125rem;
  height: 54.625rem;
  flex-direction: column;
  display: flex;
  background-color: white;
  padding: 0 3.5rem;
  box-sizing: border-box;
  padding-top: 17.12rem;
  padding-bottom: 4.69rem;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

const Box2 = styled.div`
  width: 18.6875rem;
  height: 7.5rem;
  flex-shrink: 0;
  background-color: white;
  padding: 0.63rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

const Box3 = styled.div`
  width: 18.6875rem;
  height: 10.875rem;
  flex-shrink: 0;
  background-color: white;
  padding: 3.87rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SigninContainer = styled.div`
  width: 15.625rem;
  height: 3.125rem;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.3125rem;
  background: #96eaff;
  color: #fff;
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  text-align: center;
  font-family: Inter;
  cursor: pointer;
`

const Input = styled.input`
  width: 16.5625rem;
  height: 2.625rem;
  border-radius: 0.3125rem;
  border: 1px solid #949494;
  background: #fff;
  color: #8a8a8a;
  font-family: Inter;
  font-size: 1rem;
  font-weight: 400;
`

const WarringText = styled.p`
  margin: 0;
  align-self: flex-start;
  text-align: left;
  font-size: 0.75rem;
  color: red;
`

export default function Signin() {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [name, setName] = useState("")
  const [major, setMajor] = useState("")

  const navigate = useNavigate();

  const mockdata = {
            "studentNumber" : id,
            "password" : password,
            "name" : name,
            "major" : major
      }

  const handleSubmit = async () => {
    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.")
      return
    }

    try {
      const response = await axios.post("https://mini1team.lion.it.kr/api/v1/user/sign-up", 
        mockdata)
      alert("회원가입 성공!")
      console.log(response.data)
      navigate("/login");
    } catch (error) {
      console.error("회원가입 오류", error)
      alert("회원가입 실패")
    }
  }

  return (
    <PageContainer>
      <Box>
        <Input placeholder="아이디(학번)" value={id} onChange={e => setId(e.target.value)} />
        <Input
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <WarringText>lms 비밀번호를 입력해주세요.</WarringText>
        <Input
          placeholder="비밀번호 확인"
          type="password"
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
        />
        {password && passwordConfirm && password !== passwordConfirm && (
          <WarringText>비밀번호가 일치하지 않습니다.</WarringText>
        )}
      </Box>
      <Box2>
        <Input placeholder="이름" value={name} onChange={e => setName(e.target.value)} />
        <Input placeholder="전공" value={major} onChange={e => setMajor(e.target.value)} />
      </Box2>
      <Box3>
        <SigninContainer onClick={handleSubmit}>회원가입</SigninContainer>
      </Box3>
    </PageContainer>
  )
}
