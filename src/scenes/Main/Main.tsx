import React, { useState } from "react";
import {
  AddBtrn,
  AddComment,
  AddCommenttextArea,
  CommentContainer,
  Mains,
  ProfilePic,
  ProfilePicDown,
  SendBtnCont,
} from "./styles/main";
import { data } from "../../../data";
import currentUser from "../../images/avatars/image-juliusomo.png";
import Comments from "../comments/Comments";
import CommentAdd from "../CommentAdd/CommentAdd";
import Reply from "../reply/Reply";
import DelateModal from "../DelateModal/DelateModal";
import { CommentData,Replys } from "./interfaces";

function Main() {
  const [commentData, setCommentData] = useState<CommentData>(data);
  const [replyToComment, setReplyToComment] = useState(0);
  const [newComment, setNewComment] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState(0);
  const [selectedReplyId, setSelectedReplyId] = useState(0);
  const [selectedReplyToDelete, setSelectedReplyToDelete] =
    useState<Replys | null>(null);
  const [globalContent, setGlobalContent] = useState("");
  //create new Reply
  const addReplyToComment = (commentId: number) => {
    setSelectedCommentId(commentId);
    const newReply = {
      id: generateNumericId(8),
      content: newComment,
      createdAt: new Date().toISOString(),
      score: 0,
      user: {
        image: {
          png: `${currentUser}`,
          webp: "",
        },
        username: "juliusomo",
      },
      replyingTo: commentId.toString(),
    };
    setSelectedReplyId(newReply.id);
    setCommentData((prevData) => {
      const updatedComments = prevData.comments.map((comment) => {
        if (comment.id === commentId) {
          const updatedComment = {
            ...comment,
            replies: [...comment.replies, newReply],
          };
          return updatedComment;
        }
        return comment;
      });

      return { ...prevData, comments: updatedComments };
    });

    setReplyToComment(0);
    setNewComment("");
  };

  //added new properity in my json isEditing
  const handleReplyEdit = (commentId: number, replyId: number) => {
    setCommentData((prevData) => {
      const updatedComments = prevData.comments.map((comment) => {
        if (comment.id === commentId) {
          const updatedReplies = comment.replies.map((reply) => {
            if (reply.id === replyId) {
              return { ...reply, isEditing: true };
            }
            return reply;
          });
          return { ...comment, replies: updatedReplies };
        }
        return comment;
      });
      return { ...prevData, comments: updatedComments };
    });
  };
  //finding specific comment and then save it
  const handleReplySave = (commentId: number, replyId: number) => {
    setCommentData((prevData) => {
      const updatedComments = prevData.comments.map((comment) => {
        if (comment.id === commentId) {
          const updatedReplies = comment.replies.map((reply) => {
            if (reply.id === replyId) {
              return { ...reply, isEditing: false };
            }
            return reply;
          });
          return { ...comment, replies: updatedReplies };
        }
        return comment;
      });
      return { ...prevData, comments: updatedComments };
    });
  };
  //editing previes values
  const handleReplyEdits = (
    commentId: number,
    replyId: number,
    content: string
  ) => {
    setCommentData((prevData) => {
      const updatedComments = prevData.comments.map((comment) => {
        if (comment.id === commentId) {
          const updatedReplies = comment.replies.map((reply) => {
            if (reply.id === replyId) {
              return { ...reply, content };
            }
            return reply;
          });
          return { ...comment, replies: updatedReplies };
        }
        return comment;
      });
      return { ...prevData, comments: updatedComments };
    });
  };
  //findinf selected comment and reply
  const handleReplyDelete = (commentId: number, replyId: number) => {
    const selectedComment = commentData.comments.find(
      (comment) => comment.id === commentId
    );
    const selectedReply = selectedComment?.replies.find(
      (reply) => reply.id === replyId
    );

    if (selectedReply) {
      setSelectedReplyToDelete(selectedReply);
      setIsOpenModal(true);
    }
  };
  //delating selected reply
  const handleConfirmDelete = () => {
    if (selectedReplyToDelete) {
      const commentId = selectedCommentId;
      const replyId = selectedReplyToDelete.id;
      setCommentData((prevData) => {
        const updatedComments = prevData.comments.map((comment) => {
          if (comment.id === commentId) {
            const updatedReplies = comment.replies.filter(
              (reply) => reply.id !== replyId
            );
            return { ...comment, replies: updatedReplies };
          }
          return comment;
        });

        return { ...prevData, comments: updatedComments };
      });

      setIsOpenModal(false);
    }
  };
  const addGlobalComment = () => {
    const newCommentData = {
      id: generateNumericId(8),
      content: globalContent,
      createdAt: new Date().toISOString(),
      score: 0,
      user: {
        image: {
          png: `${currentUser}`,
          webp: "",
        },
        username: "juliusomo",
      },
      replies: [],
    };

    setCommentData((prevData) => {
      const updatedComments = [...prevData.comments, newCommentData];
      console.log(updatedComments);
      return { ...prevData, comments: updatedComments };
    });

    setGlobalContent("");
  };

  return (
    <Mains>
      {commentData.comments.map((comment) => (
        <CommentContainer key={comment.id}>
          <Comments
            setReplyToComment={setReplyToComment}
            score={comment.score}
            img={comment.user.image.png}
            username={comment.user.username}
            created={comment.createdAt}
            content={comment.content}
            replyToComment={replyToComment}
            id={comment.id}
            
          />
          {/**comment add */}
          <CommentAdd
            replyToComment={replyToComment}
            id={comment.id}
            username={comment.user.username}
            currentUser={currentUser}
            setNewComment={setNewComment}
            addReplyToComment={addReplyToComment}
          />
          {/**replies */}
          {comment.replies.map((reply) => (
            <React.Fragment key={reply.id}>
              <Reply
                replyId={reply.id}
                userImg={reply.user.image.png}
                username={reply.user.username}
                editing={reply.isEditing}
                handleReplyEdits={handleReplyEdits}
                commentId={comment.id}
                content={reply.content}
                handleReplySave={handleReplySave}
                handleReplyEdit={handleReplyEdit}
                replyToComment={replyToComment}
                setReplyToComment={setReplyToComment}
                created={reply.createdAt}
                setIsOpenModal={setIsOpenModal}
                handleReplyDelete={handleReplyDelete}
                 score={reply.score}
              />
              {isOpenModal && (
                <DelateModal
                  handleConfirmDelete={handleConfirmDelete}
                  commentId={comment.id}
                  replyId={reply.id}
                  setIsOpenModal={setIsOpenModal}
                />
              )}
            </React.Fragment>
          ))}
        </CommentContainer>
      ))}
      <CommentContainer>
        <AddComment>
          <ProfilePic
            style={{ backgroundImage: `url(${currentUser})` }}
          ></ProfilePic>
          <AddCommenttextArea
            onChange={(e) => setGlobalContent(e.target.value)}
          />

          <SendBtnCont>
            <ProfilePicDown
              style={{ backgroundImage: `url(${currentUser})` }}
            ></ProfilePicDown>
            <AddBtrn onClick={addGlobalComment}>add</AddBtrn>
          </SendBtnCont>
        </AddComment>
      </CommentContainer>
    </Mains>
  );
}

export default Main;
//generating unique id
function generateNumericId(desiredLength: number) {
  const numbers = "0123456789";
  let id = "";

  for (let i = 0; i < desiredLength; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    id += numbers[randomIndex];
  }

  return Number(id);
}
