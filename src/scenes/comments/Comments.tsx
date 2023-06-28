import React from 'react'
import { Commentsinside, CommentVotes,CommentBOdy, CommentHeader, ProfilePIc, Username, CommentPostedTime, CommentContent, CommentFooter, CommentVotesDown, CommentBtnDown, ReplyBtnDown } from '../Main/styles/main'
import EditOrReply from '../../components/EditOrReply'
import CommentVotesComponent from '../../components/CommentVotes'
import CommentVotesDownComponent from '../../components/CommentVotesDown'
import EditOrReplyDown from '../../components/editOrReplyDown'
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
            <EditOrReplyDown username={username} replyToComment={replyToComment} setReplyToComment={setReplyToComment} id={id}/>
            </CommentBtnDown>
        </CommentFooter>
    </CommentBOdy>
    </Commentsinside>
  )
}

export default Comments