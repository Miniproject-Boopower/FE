import styled from "styled-components"
import { useState } from "react"
import { MdPlayArrow } from "react-icons/md";



const PageContainer = styled.div`
    width: 25.125rem;
    height: 54.625rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: red;
    padding : 4.5rem 1.65rem 4.5rem 1.65rem;
    box-sizing : border-box ;
    gap : 2.37rem;
    `

const HeaderContianer = styled.div`
    width : 11.75rem;
    height : 2.25rem;
    display: flex;
    flex-direction: row;
    gap : 0.7rem;
    align-items: center;
    justify-content: center;
`

const LeftArrow = styled(MdPlayArrow)`
    width: 2rem;
    height: 2rem;
    fill: #8A8A8A;
    transform: scaleX(-1);
    display : flex;
    border-radius: 1rem;
`

const RightArrow = styled(MdPlayArrow)`
    width: 2rem;
    height: 2rem;
    fill: #8A8A8A;
    display : flex;
    border-radius: 1rem;
`

const DayText = styled.h1`
    color: #030202;
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin :0 ;
`

const MemoContainer = styled.div`
    width : 21.81rem;
    height : 29.75rem;
    display : flex;
    flex-direction: column;
`



export default function CalenderDepth(){



    return(

            <PageContainer>
                <HeaderContianer>
                    <LeftArrow/>
                    <DayText>5월 22일</DayText>
                    <RightArrow/>
                </HeaderContianer>
            </PageContainer>
    )
}
