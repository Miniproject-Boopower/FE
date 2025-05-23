import React from "react";
import styled from "styled-components";
import { WiDirectionLeft } from "react-icons/wi";
import { FaRegSquareCheck } from "react-icons/fa6";


const PageContainer = styled.div`
    position: relative;
    width: 25.125rem;
    height: 68.56rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeaderContainer = styled.div`
    width: 25.125rem;
    height: 3.9375rem;
    align-items: center;
    //justify-content: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative; /* 부모 요소를 상대적으로 설정 */
`;

const Header = styled.div`
    color: #000;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0 auto;
`;


const BackButton = styled(WiDirectionLeft)`
    width: 2rem;
    height: 2rem;
    position: absolute; /* 절대 위치로 설정 */
    left: 0.5rem; /* 원하는 위치로 이동 */
  
`;

const MainContainer = styled.div`
    width: 25.125rem;
    height: 64.63rem;
`;

const ProfileContainer = styled.div`
    width: 25.0625rem;
    height: 20.9375rem;
    padding-top:0.94rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    //justify-content: center;
`;

const ProfileCard = styled.div`
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


const TodayContainer = styled.div`
    width: 25.0625rem;
    height: 17.0625rem;
    border-radius: 1.875rem 1.875rem 0rem 0rem;
    border-top: 1px solid rgba(0, 0, 0, 0.50);
    padding-top:1.56rem;
    //padding-bottom: 0.62rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

const TodayNavigator = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.81rem;
`;

const TodayTaskBar = styled.div`
    color: #94E8FD;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-bottom:  1px solid #94E8FD;
`;

const TodayTimetableBar = styled.div`
    color: #A9ABAB;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-bottom: #A9ABAB;
`;

const TodayCard = styled.div`
    margin-top: 0.62rem;
    width: 20.5625rem;
    height: 11rem;
    border-radius: 0.625rem;
    border: 1px solid #D2D6D9;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 1.19rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute
`;

const TodayTaskCard = styled(TodayCard)`
    z-index: 1;
    right: 0.94rem;
    top: 3rem
`;

const TodayTimetableCard = styled(TodayCard)`
    z-index: 0;
    top: 3.94rem;

`

const TaskContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 18.12675rem;
    height: 2.0625rem;
    border-bottom: 1px solid #E3DEDE;
    align-items: center;
    padding-left: 0.26rem;
    box-sizing: border-box;

`;

const CheckButton = styled(FaRegSquareCheck)`
    width: 0.72919rem;
    height: 0.72919rem;
`;

const TaskText = styled.div`
    width: 13.6875rem;
    height: 0.9375rem;
    display: flex;
    align-items: center;
    padding-left: 0.38rem;
    color: #000;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

`

const ImportantIcon = styled.div`
    width: 2.63756rem;
    height: 1.1875rem;
    background-color: #94E8FD;
    color: #5E5C5C;
    border-radius: 1.56rem;
    font-size: 0.75rem;  
    font-style: normal;   
    font-weight: 400;  
    line-height: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.87rem;
    margin-top: 0.3rem;
`;

const FriendCalenderConatainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25.125rem;
    height: 26.4375rem;
`;

const FriendCalenderBar = styled.div`
    width: 25.125rem;
    height: 2.375rem;
    color: #94E8FD;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    padding-top:0.62rem;

`


export default function BestFriend(){
    return(
        <div>
            <PageContainer>
                <HeaderContainer>
                    <BackButton></BackButton>
                    <Header>
                        친구 정보
                    </Header>
                </HeaderContainer>
                <MainContainer>
                    <ProfileContainer>
                        <ProfileCard>
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
                        </ProfileCard>
                    </ProfileContainer>
                    <TodayContainer>
                        <TodayNavigator>
                            <TodayTaskBar>
                                오늘 할 일
                            </TodayTaskBar>
                            <TodayTimetableBar>
                                오늘 시간표
                            </TodayTimetableBar>
                        </TodayNavigator>
                        <TodayTaskCard>
                            <TaskContent>
                                <CheckButton />
                                <TaskText>
                                    데이터사이언스 응용: eclass 듣기
                                </TaskText>
                                <ImportantIcon>
                                    중요
                                </ImportantIcon>
                            </TaskContent>
                            <TaskContent>
                                <CheckButton />
                                <TaskText>
                                    데이터사이언스 응용: eclass 듣기
                                </TaskText>
                                <ImportantIcon>
                                    중요
                                </ImportantIcon>
                            </TaskContent>
                        </TodayTaskCard>
                        <TodayTimetableCard></TodayTimetableCard>
                    </TodayContainer>
                    <FriendCalenderConatainer>
                        <FriendCalenderBar>
                            부력이의 5월
                        </FriendCalenderBar>
                    </FriendCalenderConatainer>
                </MainContainer>
            </PageContainer>
        </div>
    )
}