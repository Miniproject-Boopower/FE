import styled from "styled-components"
import { useState } from "react"



const PageContainer = styled.div`
    width: 25.125rem;
    height: 54.625rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: red;
    padding : 1.63rem; 
    `



export default function CalenderDepth(){

    const[data, setdata] = useState("");

    return(

            <PageContainer>
            </PageContainer>
    )
}
