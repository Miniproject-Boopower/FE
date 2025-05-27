import React from "react";
import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlineUserSwitch } from "react-icons/ai";


const PageContainer = styled.div`
    width: 25.125rem;
    height: 17.125rem;
    background-color: #ffffff;
    border-radius: 0.625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.75rem;
    overflow: hidden;
`;

const ModalHeader = styled.div`
    width: 22.245rem;
    height: 3.1875rem;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding: 0.94rem 1.44rem;
`;

const CloseButton = styled(RiCloseLine)`
    width: 0.9375rem;
    height: 0.9375rem;
    fill: #635F5F;
`;

const ModalTitle = styled.div`
    color: #000;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0 auto;
`;

const ActivityContainer = styled.div`
    width: 20.3125rem;
    height: 4.75rem;
    border-radius: 0.4375rem;
    background: #F0F4F8;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 1.56rem;
    box-sizing: border-box;
    gap: 0.69rem;
`;

const PersonButton = styled(AiOutlineUserSwitch)`
  width: 1.5625rem;
  height: 1.5625rem;
  fill: #96EAFF;
`;

const EditContainer = styled.div`
    width: 12.8125rem;
    height: 3.375rem;
    border-radius: 0.4375rem;
    border: 1px solid #BABFCF;
    display: flex;
    align-items: center;
    padding-left: 0.69rem;
    box-sizing: border-box;
`;

const ActivityItem = styled.div`
    color: #000;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const SubmitButton = styled.div`
    width: 25.1rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #96EAFF;
    border-radius: 0 0 0.625rem 0.625rem;
    margin-top: auto; //하단에 붙임

`
const SubmitTitle = styled.div`
    color: #FFF;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export default function FixplanModal({ onClose}){
    return(
        <div>
            <PageContainer>
                <ModalHeader>
                    <ModalTitle>
                        활동 수정하기
                    </ModalTitle>
                    <CloseButton onClick = {onClose} />
                </ModalHeader>
                <ActivityContainer>
                    <PersonButton />
                    <EditContainer>
                        <ActivityItem>
                            멋쟁이 사자처럼
                        </ActivityItem>
                    </EditContainer>
                </ActivityContainer>
                <SubmitButton>
                    <SubmitTitle>수정완료</SubmitTitle>
                </SubmitButton>
            </PageContainer>
        </div>
    )
}