import styled from "styled-components";


export const ConfirmWrapper = styled.div`
align-items: center;
height: 100vh;
background: rgba(0,0,0,.3);
display: flex;
justify-content: center;
position: fixed;
left: 0;
top: 0;
z-index: 999;
width: 100%;
`

export const DElateContainer = styled.div`
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    width: 90%;
    @media (min-width: 26.25em) {
        width: 400px;
        padding: 30px;
    }
`
export const DelTitle = styled.div`
    color: #324152;
    font-size: 1.2rem;
    font-weight: 700;
`
export const ConfirmMessage= styled.div`
color: #67727e;
    line-height: 1.5;
`
export const BtnCont = styled.div`
display: flex;
justify-content: space-evenly;
`
export const Btn = styled.button`
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    padding: 15px 20px;
    text-transform: uppercase;
    transition: .3s;
    font-size:1rem;
    @media (min-width: 26.25em) {
        padding: 15px 30px;
    }
`
export const Cancel = styled(Btn)`
background-color: #67727e;
`
export const Delate = styled(Btn)`
    background: #ed6468;
    color: #fff;
`