import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { WiDirectionLeft } from "react-icons/wi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { LuPencil } from "react-icons/lu";
import { LiaTrashAlt } from "react-icons/lia";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { IoMdShare } from "react-icons/io";
import FixplanModal from "./Fixplanmodal";
import { useState } from "react"; 

const PageContainer = styled.div`
    width: 25.125rem;
    height: 51.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    background-color: #F0F4F8;;
`;

const HeaderContainer = styled.div`
  width: 25.125rem;
  height: 4.375rem;
  //border: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.56rem;
  //justify-content: center;
`;

const BackButton = styled(WiDirectionLeft)`
    width: 2rem;
    height: 2rem;
    margin-left: 1.07rem;
    cursor: pointer;
`;

const Header = styled.div`
  color: #000;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ImportantListContainer = styled.div`
  //border: 1px solid black;
  width: 25.125rem;
  height: 16.0625rem;
  padding-top: 0.38rem;
  //padding-bottom: 0.63rem;
  display: flex;
  justify-content: center;
`;

const ImportantListCard = styled.div`
  width: 22.75rem;
  height: 15.0625rem;
  border-radius: 0.9375rem;
  background-color: #FFF;
  gap: 1.62rem;
`;

const ImportantHeader = styled.h1`
  color: #000;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: start;
  padding-top:0.75rem;
  padding-left: 1.31rem;
`;

const ImportantListContent = styled.div`
  width: 20.5rem;
  height: 1.875rem;
  //border: 1px solid black;
  margin: 0 auto; 
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.1rem;
`;


const CheckButton = styled(FaRegCircleCheck)`
  width: 1.36719rem;
  height: 1.36719rem;
  fill: #94E8FD;
`;

const ImportantList1 = styled.div`
  margin-left: 0.82rem;
  display: flex;
  flex-direction: column;
  text-align: start;
  gap:0.19rem;
`;

const ImportantList = styled.p`
  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;

const Important = styled.p`
  color: #635F5F;
  font-size: 0.4375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;

const ButtonContainer1 = styled.div`
  width: 2.6875rem;
  height: 0.9375rem;
  display: flex;
  gap: 0.7rem;
  margin-left: 6rem;
`;

const EditButton = styled(LuPencil)`
  width: 0.9rem;
  height: 0.9rem;
  cursor: pointer;
`;

const DeleteButton = styled(LiaTrashAlt)`
  width: 0.9375rem;
  height: 0.9375rem;
  cursor: pointer;
`

const ListContainer = styled.div`
  width: 25.0625rem;
  height: 31.0625rem;
  //border: 1px solid black;
  display: flex;
  justify-content: center;
  padding-top: 0.9rem;

`;

const ListCard = styled.div`
  width: 22.75rem;
  height: 28.25rem;
  border-radius: 0.9375rem;
  background: #FFF;
  gap: 1.62rem;
`;

const ListHeader = styled.h1`
  color: #000;
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: start;
  padding-top:0.75rem;
  padding-left: 1.31rem;
`;

const ListContent = styled.div`
  width: 19.375rem;
  height: 1.875rem;
  margin: 0 auto; 
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1.1rem;
`;

const PersonButton = styled(AiOutlineUserSwitch)`
  width: 1.5625rem;
  height: 1.5625rem;
  fill: #96EAFF;

`;

const List1 = styled.div`
  margin-left: 0.82rem;
  display: flex;
  flex-direction: column;
  text-align: start;
  gap:0.19rem;
`;

const List = styled.p`
  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;

const NoImportant = styled.p`
  color: #635F5F;
  font-size: 0.4375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;

const ButtonContainer2 = styled.div`
  width: 4.25rem;
  height: 1rem;
  display: flex;
  gap: 0.7rem;
  margin-left: 6rem;
`;

const ShareButton = styled(IoMdShare)`
  width: 0.9375rem;
  height: 0.9375rem;
  
`

export default function Mypagedepth(){
  //모달창 띄우기 위한 상태관리
  const [ModalOpen, setModalOpen] = useState(false);
  const OnClickEditButton = () => {
    setModalOpen(true); // 모달 열기
  };
  const closeModal = () => {
    setModalOpen(false);
  };

    const navigate = useNavigate();
    const OnClickBackButton = () => {
        console.log('뒤로가기 버튼 클릭함');
        navigate(`/main`);
      };


  const importantActivities = [
    {
      title: "멋쟁이사자처럼 13기",
      tag: "중요활동"
    },
    {
      title: "멋쟁이사자처럼 13기",
      tag: "중요활동"
    }
  ];
      

  
    
  return(
      <div>
        <PageContainer>
          <HeaderContainer>
            <BackButton onClick={OnClickBackButton}/>
            <Header>
              활동 목록
            </Header>
          </HeaderContainer>
          <ImportantListContainer>
            <ImportantListCard>
              <ImportantHeader>
                중요 활동 목록
              </ImportantHeader>
              { importantActivities.map((activity,index) => (
                <ImportantListContent key={index}>
                <CheckButton />
                <ImportantList1>
                  <ImportantList>{activity.title}</ImportantList>
                  <Important>{activity.tag}</Important>
                </ImportantList1>
                <ButtonContainer1>
                  <EditButton onClick={OnClickEditButton} />
                  <DeleteButton />
                </ButtonContainer1>
              </ImportantListContent>
            ))}
              {/*<ImportantListContent>
                <CheckButton />
                <ImportantList1>
                  <ImportantList>
                    멋쟁이사자처럼 13기
                  </ImportantList>
                  <Important>
                    중요활동
                  </Important>
                </ImportantList1>
                <ButtonContainer1>
                  <EditButton onClick={OnClickEditButton}/>
                  <DeleteButton />
                </ButtonContainer1> 
              </ImportantListContent>
              <ImportantListContent>
                <CheckButton />
                <ImportantList1>
                  <ImportantList>
                    멋쟁이사자처럼 13기
                  </ImportantList>
                  <Important>
                    중요활동
                  </Important>
                </ImportantList1>
                <ButtonContainer1>
                  <EditButton onClick={OnClickEditButton}/>
                  <DeleteButton />
                </ButtonContainer1>
              </ImportantListContent> */}
            </ImportantListCard>
          </ImportantListContainer>
          <ListContainer>
            <ListCard>
              <ListHeader>
                25-1 활동 목록
              </ListHeader>
              <ListContent>
                <PersonButton />
                <List1>
                  <List>
                    멋쟁이사자처럼
                  </List>
                  <NoImportant>
                    외부활동
                  </NoImportant>
                </List1>
                <ButtonContainer2>
                  <EditButton onClick={OnClickEditButton} />
                  <ShareButton />
                  <DeleteButton />
                </ButtonContainer2>
              </ListContent>
              <ListContent>
                <PersonButton />
                <List1>
                  <List>
                    멋쟁이사자처럼
                  </List>
                  <NoImportant>
                    외부활동
                  </NoImportant>
                </List1>
                <ButtonContainer2>
                  <EditButton onClick={OnClickEditButton}/>
                  <ShareButton />
                  <DeleteButton />
                </ButtonContainer2>
              </ListContent>
            </ListCard>
          </ListContainer>
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
    <FixplanModal onClose={closeModal} />
  </div>
)}

      </div>
  )
}
