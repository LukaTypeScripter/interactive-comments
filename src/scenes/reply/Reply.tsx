import React from 'react'
import { ReplyCOntainer, CommentCont, Commentsinside, CommentVotes, CommentBOdy, CommentHeader, ProfilePIc, Username, YouTag, CommentPostedTime, CommentContent, AddCommenttextArea, CommentFooter, CommentVotesDown, CommentBtnDown, DElateBtn, ReplyBtnDown, CommentBtn } from '../Main/styles/main'
import CommentVotesComponent from '../../components/CommentVotes'
import CommentVotesDownComponent from '../../components/CommentVotesDown'
interface Props {
    replyId:number
    userImg:string
    username: string
    editing: boolean | undefined
    handleReplyEdits: (commentId: number, replyId: number, content: string) => void
    commentId: number
    handleReplyEdit: (commentId: number, replyId: number) => void
     handleReplySave: (commentId: number, replyId: number) => void
     replyToComment: number
     setReplyToComment: React.Dispatch<React.SetStateAction<number>>
     content:string
     created:any
     setIsOpenModal:React.Dispatch<React.SetStateAction<boolean>>
     handleReplyDelete:(commentId: number, replyId: number) => void
     score:number
}
     
function Reply({replyId,userImg,username,editing,handleReplyEdits,commentId,handleReplyEdit,handleReplySave,replyToComment,setReplyToComment,content,handleReplyDelete,score }:Props) {
    // function getTimeDifference(timestamp: string): string {
    //     const currentDate = new Date();
    //     const previousDate = new Date(timestamp);
    //     const differenceInSeconds = Math.floor((currentDate.getTime() - previousDate.getTime()) / 1000);
      
    //     if (differenceInSeconds < 60) {
    //       return `${differenceInSeconds} seconds ago`;
    //     } else if (differenceInSeconds < 3600) {
    //       const minutes = Math.floor(differenceInSeconds / 60);
    //       return `${minutes} minutes ago`;
    //     } else if (differenceInSeconds < 86400) {
    //       const hours = Math.floor(differenceInSeconds / 3600);
    //       return `${hours} hours ago`;
    //     } else {
    //       const days = Math.floor(differenceInSeconds / 86400);
    //       return `${days} days ago`;
    //     }
    //   }
  return (
    <ReplyCOntainer key={replyId}>
    <CommentCont>
      <Commentsinside>
        <CommentVotes>
        <CommentVotesComponent score={score} />
        </CommentVotes>
        <CommentBOdy>
          <CommentHeader>
            <ProfilePIc
              style={{
                backgroundImage: `url(${userImg})`,
              }}
            ></ProfilePIc>
            <Username>{username}</Username>
            {username !== "ramsesmiron" && (
                <YouTag>you</YouTag>
            )}
            
            
            <CommentPostedTime>1 second ago</CommentPostedTime>
            <CommentBtn>
            {username !== "ramsesmiron" ? (
              <CommentBtnDown>
                <DElateBtn onClick={() => handleReplyDelete(commentId,replyId)}>
                  <svg
                    width="12"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                      fill="#ED6368"
                    />
                  </svg>
                  Delete
                </DElateBtn>
                {editing &&
                username !== "ramsesmiron" ? (
                  <ReplyBtnDown
                    onClick={() =>
                      handleReplySave(commentId, replyId)
                    }
                  >
                    <svg
                      width="14"
                      height="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                        fill="#5357B6"
                      />
                    </svg>
                    save
                  </ReplyBtnDown>
                ) : (
                  <ReplyBtnDown
                    onClick={() =>
                      handleReplyEdit(commentId, replyId)
                    }
                  >
                    <svg
                      width="14"
                      height="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                        fill="#5357B6"
                      />
                    </svg>
                    Edit
                  </ReplyBtnDown>
                )}
              </CommentBtnDown>
            ) : (
              <CommentBtnDown>
                <ReplyBtnDown
                  value={replyToComment}
                  onClick={() => setReplyToComment(replyId)}
                >
                  <svg
                    width="14"
                    height="13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                      fill="#5357B6"
                    />
                  </svg>
                  reply
                </ReplyBtnDown>
              </CommentBtnDown>
            )}

            </CommentBtn>
          </CommentHeader>
          <CommentContent>
            {editing ? (
              <AddCommenttextArea
                value={content}
                onChange={(e) =>
                  handleReplyEdits(
                    commentId,
                    replyId,
                    e.target.value
                  )
                }
              />
            ) : (
              content
            )}
          </CommentContent>
          <CommentFooter>
            <CommentVotesDown>
              <CommentVotesDownComponent score={score} />
            </CommentVotesDown>
            {username !== "ramsesmiron" ? (
              <CommentBtnDown>
                <DElateBtn onClick={() => handleReplyDelete(commentId,replyId)}>
                  <svg
                    width="12"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                      fill="#ED6368"
                    />
                  </svg>
                  Delete
                </DElateBtn>
                {editing &&
                username !== "ramsesmiron" ? (
                  <ReplyBtnDown
                    onClick={() =>
                      handleReplySave(commentId, replyId)
                    }
                  >
                    <svg
                      width="14"
                      height="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                        fill="#5357B6"
                      />
                    </svg>
                    save
                  </ReplyBtnDown>
                ) : (
                  <ReplyBtnDown
                    onClick={() =>
                      handleReplyEdit(commentId, replyId)
                    }
                  >
                    <svg
                      width="14"
                      height="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                        fill="#5357B6"
                      />
                    </svg>
                    Edit
                  </ReplyBtnDown>
                )}
              </CommentBtnDown>
            ) : (
              <CommentBtnDown>
                <ReplyBtnDown
                  value={replyToComment}
                  onClick={() => setReplyToComment(replyId)}
                >
                  <svg
                    width="14"
                    height="13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                      fill="#5357B6"
                    />
                  </svg>
                  reply
                </ReplyBtnDown>
              </CommentBtnDown>
            )}
          </CommentFooter>
        </CommentBOdy>
      </Commentsinside>
    </CommentCont>
  </ReplyCOntainer>
  )
}

export default Reply