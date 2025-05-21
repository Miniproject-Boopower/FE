import styled from "styled-components"

const PageContainer = styled.div`
    width: 25.0625rem;
    height: 23.875rem;
    flex-direction: Column;
    display: flex;
    background-color: #FFF;
    padding : 0 1.4rem;
    box-sizing: border-box;
    `
const HeaderContainer = styled.div`
    width: 25.0625rem;
    height: 4.375rem;
    flex-shrink: 0;
    background-color: Gray;
    box-sizing: border-box;
    display: flex;
    flex-direction: Row;
    `

const IconContainer = styled.div`
    width: 12.5625rem;
    height: 4.375rem;
    flex-shrink: 0;
    background-color: yellow;
    padding: 1.44rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: Row;
    justify-content: flex-start;
    align-items: center;
    `
const IconContainer2 = styled.div`
    width: 12.5625rem;
    height: 4.375rem;
    flex-shrink: 0;
    background-color: yellow;
    padding: 1.56rem;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export default function Addplanmodal (){
    return (
            <PageContainer>
                <HeaderContainer>
                    <IconContainer>

                    </IconContainer>
                    <IconContainer2>
                    </IconContainer2>
                </HeaderContainer>
                
            </PageContainer>
    )
}

