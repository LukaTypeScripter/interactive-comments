import React from 'react'
import { AddComment, ProfilePic, AddCommenttextArea, SendBtnCont, ProfilePicDown, AddBtrn } from '../Main/styles/main'
interface Props {
    replyToComment: number
    username: string
    id:number
    currentUser: string
    setNewComment: React.Dispatch<React.SetStateAction<string>>
    addReplyToComment: (commentId: number) => void
}
function CommentAdd({ replyToComment, username, id, setNewComment, addReplyToComment,currentUser}:Props) {
  return (
   <>
    {replyToComment === id&& (
            <AddComment>
              <ProfilePic
                style={{ backgroundImage: `url(${currentUser})` }}
              ></ProfilePic>
              <AddCommenttextArea
                onChange={(e) => setNewComment(e.target.value)}
              >
                {"@" + username + ","}
              </AddCommenttextArea>
              <SendBtnCont>
                <ProfilePicDown
                  style={{ backgroundImage: `url(${currentUser})` }}
                ></ProfilePicDown>
                <AddBtrn onClick={() => addReplyToComment(id)}>
                  add
                </AddBtrn>
              </SendBtnCont>
            </AddComment>
          )}
   </>
  )
}

export default CommentAdd