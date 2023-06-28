import React from 'react'
import { Commentsinside, CommentVotes,CommentBOdy, CommentHeader, ProfilePIc, Username, CommentPostedTime, CommentContent, CommentFooter, CommentVotesDown, CommentBtnDown, ReplyBtnDown } from '../Main/styles/main'
import EditOrReply from '../../components/EditOrReply'
import CommentVotesComponent from '../../components/CommentVotes'
import CommentVotesDownComponent from '../../components/CommentVotesDown'
interface Props {
    setReplyToComment: React.Dispatch<React.SetStateAction<number>>
    score: number
    img: string
    username: string
    created:string
    content:string
    replyToComment: number
    id: number

}
function Comments({setReplyToComment, score, img, username, created,content,replyToComment,id}:Props) {
  return (
    <Commentsinside>
    <CommentVotes>
       <CommentVotesComponent score={score} />
    </CommentVotes>
    <CommentBOdy>
        <CommentHeader>
            <ProfilePIc style={{backgroundImage:`url(${img})`}}></ProfilePIc>
            <Username>{username}</Username>
            <CommentPostedTime>{username === "juliusomo" ? "1 seconds ago": created}</CommentPostedTime>
          <EditOrReply username={username} replyToComment={replyToComment} setReplyToComment={setReplyToComment} id={id}/>
        </CommentHeader>
        <CommentContent>
      {content}
        </CommentContent>
        <CommentFooter>
        <CommentVotesDown>
       <CommentVotesDownComponent score={score} />
    </CommentVotesDown>
            <CommentBtnDown>
                <ReplyBtnDown value={replyToComment} onClick={() =>    setReplyToComment(id)}>
                <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>
                reply
                </ReplyBtnDown>
            </CommentBtnDown>
        </CommentFooter>
    </CommentBOdy>
    </Commentsinside>
  )
}

export default Comments