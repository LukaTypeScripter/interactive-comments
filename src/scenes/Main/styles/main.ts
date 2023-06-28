import styled from "styled-components";

export const Mains = styled.main`
background-color: #f5f6fa;
align-items: center;
display: flex;
flex-direction: column;
gap: 15px;
justify-content: center;
min-height: 100vh;
padding: 2rem 0;
@media (min-width: 47em){
    gap: 20px;
    padding: 4rem 0;
}

   

`

export const CommentContainer = styled.div`
display: flex;
flex-direction: column;
width: 90%;
@media (min-width: 47em) {
    width: 735px;

}
`

export const Commentsinside = styled.div`
background-color: #fff;
border-radius: 10px;
display: flex;
flex-direction: column;
gap: 15px;
padding: 15px;
@media (min-width: 47em)  {
    flex-direction: row;
}
`
export const CommentVotes = styled.div`
align-items: center;
background-color: #f5f6fa;
display: none;
flex-direction: column;
padding: 8px 12px 10px;
justify-content: center;
border-radius: 10px;
@media (min-width: 47em){
 display:flex;
}

`
export const CommentVotesDown = styled(CommentVotes)`
display: flex;
flex-direction: row;
padding: 8px 15px;

`


export const CommentBOdy = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`

export const CommentHeader = styled.div`
align-items: center;
display: flex;
`
export const ProfilePIc = styled.div`
background-size: cover;
border-radius: 50%;
height: 30px;
margin-right: 10px;
width: 30px;
`
export const Username = styled.div`
color:#324152;
font-weight:500;
`
export const CommentPostedTime = styled.div`
color: #67727e;
margin-left: 15px;
`
export const CommentBtn = styled.div`
    display: none;
    @media (min-width: 47em) {
        display:flex;
        gap: 7px;
    margin-left: auto;
        align-items: center;
    }
`
export const ReplyBtn = styled.button`
align-items: center;
background: transparent;
border: none;
border-radius: 5px;
color: #5457b6;
cursor: pointer;
display: flex;
font-weight: 700;
gap: 5px;
padding: 5px;
`
export const CommentContent = styled.div`
    word-wrap: break-word;
    color: #67727e;
    line-height: 1.5;
    width: 100%;
`
export const CommentFooter = styled.div`
align-items: center;
display: flex;
justify-content: space-between;
@media (min-width: 47em) {
    display:none;
}
`
export const CommentBtnDown = styled.div`
    align-items: center;
    display: flex;
    gap: 7px;
    margin-left: auto;
`

export const ReplyBtnDown = styled.button`
align-items: center;
background: transparent;
border: none;
border-radius: 5px;
color: #5457b6;
cursor: pointer;
display: flex;
font-weight: 700;
gap: 5px;
padding: 5px;
`

export const AddComment = styled.div`
margin-top: 5px;
width: 100%;
background-color: #fff;
border-radius: 10px;
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
@media (min-width: 47em)
{
    flex-direction: row;
    gap: 25px;
    padding: 25px;
    width: 735px;
}
`
export const ProfilePic = styled.div`
    background-size: cover;
    border-radius: 50%;
    height: 30px;
    margin-right: 10px;
    width: 30px;
    display: none;
    @media (min-width: 47em) {
        display: flex;
        display: block;
    height: 36px;
    margin: 0;
    width: 50px;
}
    
`

export const ProfilePicDown = styled(ProfilePic)`
display: flex;
@media (min-width: 47em) {
    display: none;
}
`
export const AddCommenttextArea = styled.textarea`
border: 2px solid #eaecf1;
    border-radius: 10px;
    color: #324152;
    height: 100px;
    padding: 15px 25px;
    position: relative;
    resize: none;
    @media (min-width: 47em) {
       width: 100%;
    }
`

export const SendBtnCont = styled.div`
align-items: center;
display: flex;
justify-content: space-between;
`
export const AddBtrn = styled.button`
    background: #5457b6;
    border: 0;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    font-weight: 700;
    padding: 15px 30px;
    text-transform: uppercase;
`


//reply cont
export const ReplyCOntainer = styled.div`
margin-top: 15px;
align-items: center;
border-left: 2px solid #eaecf1;
display: flex;
flex-direction: column;
gap: 15px;
margin-left: 15px;
padding-left: 15px;
`
export const CommentCont = styled(CommentContainer)`
width: 100%;
`
export const YouTag = styled.div`
background: #5457b6;
border-radius: 3px;
color: #fff;
font-size: .9rem;
font-weight: 400;
margin-left: 10px;
padding:2px 10px 3px;
`

export const ReplyBtnEdit = styled(ReplyBtn)`
display: none;
`
export const DElateBtn = styled(ReplyBtnDown)`
color: #ed6468;
`