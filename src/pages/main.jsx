import styled from "styled-components"
import { useState , useEffect} from "react"
import { IoIosArrowForward } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import api from "../axios";


const PageContainer = styled.div`
    width: 25.125rem;
    height: 54.625rem;
    display: flex;
    flex-direction: column;
    padding : 0.88rem 1.75rem 2.69rem 1.75rem;
    box-sizing: border-box;
    gap : 1.44rem;
    align-items: center;
    `

const HeaderContainer = styled.div`
    width : 7.75rem;
    height : 3.44rem;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
`
const TitleContainer = styled.div`
    width : 7.75rem;
    height : 2.75rem;
    display: flex;
    flex-direction: row;
`

const Img = styled.div`
    width : 2.75rem;
    height : 2.75rem;
    background-color:yellow;
`
const HeaderText = styled.h1`
    color: #635F5F;
    text-align: center;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

const MiddleText = styled.h2`
    margin: 0;
    color: #635F5F;
    text-align: center;
    font-family: Inter;
    font-size: 0.4375rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

const FriendContainer = styled.div`
    width : 21.44rem;
    height : 7.81rem;
    display: flex;
    flex-direction: column;
`

const DayContainer = styled.div`
    width : 21.44rem;
    height : 10.63rem;
    border-radius: 0.4375rem;
    background: #F0F4F8;
    display: flex;
    flex-direction: column;
    padding : 1.31rem 1.31rem 1.37rem 1.12rem;
    gap : 0.62rem;
    box-sizing: border-box;
`

const TodoContainer = styled.div`
    width : 21.44rem;
    height : 10rem;
    display: flex;
    flex-direction: column;
    background: #F0F4F8;
`

const CalenderContainer = styled.div`
    width : 21.44rem;
    height : 10rem;
    display: flex;
    flex-direction: column;
`

const MyContainer = styled.div`
    width: 21.4375rem;
    height: 6.25rem;
    border-radius: 0.4375rem;
    background: #E4F7FF;
    display : flex;
    flex-direction: row;
    padding : 0.94rem 0.94rem 1.44rem 0.75rem;
    box-sizing: border-box;
`

const MydownContainer = styled.div`
    width: 21.4375rem;
    height : 1.56rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap : 0.62rem;
    z-index: 1;
    margin-top: -1.56rem;
`
const MyImg = styled.div`
    width: 4.375rem;
    height: 4.375rem;
    background-color: red;
`
const MyTitle = styled.h1`
    color: #000;
    font-family: Inter;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin-left: 1rem;
`

const Arrow = styled(IoIosArrowForward)`
    width: 3rem;
    height: 2.25rem;
    margin-left: 4.81rem;
    margin-top: 1.75rem;
`

const CircleImg = styled.div`
    width: 3.125rem;
    height: 3.125rem;
    background-color: blue;
    border-radius: 3.125rem;
`
const Dday = styled.div`
    width : 5.25rem;
    height : 1.375rem;
    padding: 0.1875rem 1.375rem 0.1875rem 1.3125rem;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 0.4375rem;
    background: #94E8FD;
    color: #FFF;
    font-family: Inter;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
`

const DdayContainer = styled.div`
    width : 17.78rem;
    height : 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #94E8FD;
`

const InfoIcon = styled(IoMdInformationCircleOutline)`
    width : 1.1;
    height : 1.1rem;
`

const DdayText = styled.h4`
    color: #94E8FD;
    font-family: Inter;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin : 0;
    margin-left: 0.31rem;
`

const DdaymiddleText = styled.h4`
    color: #635F5F;
    font-family: Inter;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 13.53081rem;
    margin-left : 0.19rem;
`

const MemoContainer = styled.div`
    width : 21.44rem;
    height : 1.44rem;
    display: flex;
    flex-direction: row;
    gap : 0.88rem;
    padding : 0rem 0.69rem 0rem 0.69rem;
    box-sizing: border-box;

`
const MemodownContainer = styled.div`
    width : 21.44rem;
    height : 9.81rem;
    display: flex;
    flex-direction: column;
    padding :1rem 0.5rem 1.39rem 1.13rem;
    gap: 0.7rem;
    box-sizing: border-box;
`

const MemoMiddleContainer = styled.div`
    width :0.87rem;
    height : 1.44rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MemoTip = styled.div`
    width : 0.31rem;
    height : 0.7rem;
    background: #FFF;
`

const MemoCircle = styled.div`
    width : 0.87rem;
    height : 0.87rem;
    background-color: #FFF;
    border-radius: 60rem;
    display: flex;
    z-index : 1;
`

const TodoTextContainer = styled.div`
    width : 19.25rem;
    height : 1.37rem;
    display: flex;
    align-items: center;
    
`

const CheckIcon = styled(FaRegCircleCheck)`
    width : 1.37rem;
    height : 1.37rem;
    color: #605E5E;
`

const CheckText = styled.h4`
    color: #605E5E;
    font-family: Inter;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 1.01rem;
`

const CaltopContainer = styled.div`
    width : 21.44rem;
    height : 1.87rem;
    background: #E4F7FF;
`

const CaldownContainer = styled.div`
    width : 21.44rem;
    height : 8.12rem;
    background: rgba(217, 217, 217, 0.25);
    display: flex;
    flex-direction: row;
    padding : 0.88rem 0.75rem 0.88rem 0.75rem;
    box-sizing: border-box;
`

const CaldayConatainer = styled.div`
    width : 2.64rem;
    height : 10rem;
    display: flex;
    flex-direction: column;
    gap: 0.44rem;
    align-items: center;
`

const CalenderText = styled.h4`
    font-family: Inter;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin : 0;
    color: black;
`



export default function Main({id}){

    const memos = Array(14).fill(0);
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const [data, setData] = useState("");
    const [assignmentData, setAssignmentData] = useState([]);
    const [ddaydata, setDdayData] = useState([]);
    const [scheduledata, setScheduledata] = useState([]);
    const [loading, setLoading] = useState(true);
    const Stnum = localStorage.getItem("studentId");
    const navigate = useNavigate();


 useEffect(() => {
    const fetchData = async () => {
        try {
        const assignmentRes = await api.get("/api/v1/user/main/today/assignment",  {params: {
            "studentNumber" : Stnum
        }});
        setAssignmentData(assignmentRes.data.data);
        console.log("Assignment Data:", assignmentRes.data);

        const scheduleRes = await api.get("/api/v1/user/main/d-day",{params: {
            "studentNumber" : Stnum
        }});
        setDdayData(scheduleRes.data.data);
        console.log("Schedule Data:", scheduleRes.data);

        const scheduleData = await api.get("/api/v1/user/main/today/schedule",{params: {
            "studentNumber" : Stnum
        }});
        setScheduledata(scheduleData.data.data);
        console.log("Schedule Data:", scheduleData.data);

        } catch (error) {
        console.log(Stnum);
        
        console.error("데이터 가져오기 실패:", error);
        }
    finally {
            setLoading(false); // 요청이 끝난 후 loading false로 설정
        }
    };

    fetchData();
}, []);

    const gotoMypage = () => {
        navigate("/mypage")
    }

    return(
        <PageContainer>
            <HeaderContainer>
                <TitleContainer>
                    <Img/>
                    <HeaderText>BOO력</HeaderText>
                </TitleContainer>
                <MiddleText>계획 세우는것도 힘이니까!</MiddleText>
            </HeaderContainer>
            <FriendContainer>
                <MyContainer>
                    <MyImg/>
                    <MyTitle>김민석</MyTitle>
                    <Arrow onClick={gotoMypage}/>
                </MyContainer>
                <MydownContainer>
                    <CircleImg/>
                    <CircleImg/>
                    <CircleImg/>
                </MydownContainer>
            </FriendContainer>
            {loading ? (
                <p>로딩 중...</p>
            ) : (
            <DayContainer>
                        <Dday>D-Day</Dday>
                    {Array.isArray(ddaydata) && ddaydata.map((item, index) => (
                        <DdayContainer key={index}>
                            <InfoIcon />
                            <DdayText>{item.leftDay}</DdayText>
                            <DdaymiddleText>{item.assignmentName}</DdaymiddleText>
                        </DdayContainer>
                  
                ))}
              </DayContainer>
            )}
                <TodoContainer>
                    <MemoContainer>
                        {memos.map((_, index) => (
                        <MemoMiddleContainer key={index}>
                            <MemoTip />
                            <MemoCircle />
                        </MemoMiddleContainer>
                        ))}
                    </MemoContainer>
                    {loading ? (
                        <p>로딩 중...</p>
                    ) : (
                    <MemodownContainer>
                        {Array.isArray(scheduledata) && scheduledata.map((item, index) => (
                        <TodoTextContainer key={index}>
                            <CheckIcon />
                            <CheckText>{item.name}</CheckText>
                        </TodoTextContainer>
                  
                ))}
                    </MemodownContainer>
                    )}
                </TodoContainer>
            <CalenderContainer>
                <CaltopContainer/>
                <CaldownContainer>
                    {days.map((day, index) => (
                        <CaldayConatainer key={index}>
                        <CalenderText isSunday={index === 0}>{day}</CalenderText>
                        </CaldayConatainer>
                    ))}
                </CaldownContainer>
            </CalenderContainer>
        </PageContainer>
    )
}
