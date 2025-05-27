import React from "react";
import styled from "styled-components";
import { ReactComponent as BackgroundOwl } from "../svg/backgroundowl.svg";
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
    position: relative;
    width: 25.125rem;
    height: 51.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1.5rem;
    overflow: hidden;
`;

const InfoContainer = styled.div`
    width: 22.4375rem;
    height: 18.3125rem;
    background-color: #F0F4F8;
    border-radius: 0.5rem;
    padding-top: 0.8125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProfileImage = styled.div`
    width: 9.375rem;
    height: 9.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.0625rem solid black;
    border-radius: 50%;
`;



const UserName = styled.div`
    margin-top: 0.9375rem;
    font-size: 1.5625rem;
    font-weight: 700;
    line-height: normal;
`;


const UserNumber = styled.div`
    color: #635f5f;
    align-self: flex-start;
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: normal;
    margin-top: 0.9375rem;
    margin-left: 6.8125rem;

    span {
        font-weight: 600;
    }
`;

const UserMajor = styled.div`
    align-self: flex-start;
    margin-left: 6.8125rem;
    color: #635f5f;
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: normal;
    margin-top: 0.1875rem;

    span {
        font-weight: 600;
    }
`;

const UserMinor = styled.div`
    align-self: flex-start;
    margin-left: 6.8125rem;
    color: #635f5f;
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: normal;
    margin-top: 0.1875rem;

    span {
        font-weight: 600;
    }
`;

const ContentContainer = styled.div`
    width: 25.0625rem;
    height: 30.8125rem;
    border-top: 0.0625rem solid #8A8A8A;
    margin-top: 0.8125rem;
    padding-top: 1.25rem;
`;

const FixContentContainer = styled.div`
    background-color: #ffffff;
    margin: 0 auto;
    width: 22.4375rem;
    height: 6.25rem;
    display: flex;
    flex-direction: row;
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    border-radius: 0.625rem;
    margin-bottom: 2.125rem;
`;

const FixName = styled.div`
    color: #635F5F;
    font-size: 0.9375rem;
    font-weight: 600;
    margin-top: 1.125rem;
    margin-left: 1rem;
`;

const FixDescription = styled.div`
    color: #635F5F;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 8.5625rem;
    margin-right: 1.125rem;
    margin-top: 4.6875rem;
`;

const LogoutButton = styled.div`
    width: 3.5rem;
    margin: 0 auto; //중앙정렬
    padding-top: 0.375rem;
    color: #8A8A8A;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-bottom: 0.0625rem solid #8A8A8A;
    //margin-bottom: 50px;
`;

/**
 * const BackgroundContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
`; */

const StyledBackgroundOwl = styled(BackgroundOwl)`
    position: absolute;
    width: 25.11513rem;
    height: 31.8125rem;
    aspect-ratio: 8/11;
    display: flex;
    z-index: -1;
    top: 37rem;
`;


export default function MyPage(){

    const navigate = useNavigate();

    const goTologin = () => {
        navigate("/login")
    }

    return(
        <div>
            <PageContainer>
                <InfoContainer>
                    <ProfileImage>
                        <p>프로필 이미지 들어갈 예정</p>
                    </ProfileImage>
                    <UserName>
                        김부력
                    </UserName>
                    <UserNumber>
                        <span>학번</span> 20250000
                    </UserNumber>
                    <UserMajor>
                        <span>전공</span> 컴퓨터 공학과
                    </UserMajor>
                    <UserMinor>
                        <span>부전공</span> 정보통신공학과
                    </UserMinor>
                </InfoContainer>
                <ContentContainer>
                    <FixContentContainer>
                        <FixName>
                            활동목록
                        </FixName>
                        <FixDescription>
                            1학기 활동목록을 관리하세요!
                        </FixDescription>
                    </FixContentContainer>
                    <FixContentContainer>
                        <FixName>
                            활동목록
                        </FixName>
                        <FixDescription>
                            1학기 활동목록을 관리하세요!
                        </FixDescription>
                    </FixContentContainer>
                    <FixContentContainer>
                        <FixName>
                            활동목록
                        </FixName>
                        <FixDescription>
                            1학기 활동목록을 관리하세요!
                        </FixDescription>
                    </FixContentContainer>
                    <LogoutButton onClick={goTologin}>로그아웃</LogoutButton>
                </ContentContainer>
                <StyledBackgroundOwl/>
            </PageContainer>
        </div>
        
    )
}
