import React from 'react'
import { BtnCont, Cancel, ConfirmMessage, ConfirmWrapper, DElateContainer, DelTitle, Delate } from './styles/modal'
interface Props {
    commentId:number
    replyId:number
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    handleConfirmDelete:() => void
}
function DelateModal({setIsOpenModal,handleConfirmDelete}:Props) {
    
  return (
    <ConfirmWrapper>
        <DElateContainer>
            <DelTitle>Delete comment</DelTitle>
            <ConfirmMessage>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</ConfirmMessage>
            <BtnCont>
                <Cancel onClick={() => setIsOpenModal(false)}>Cancel</Cancel>
                <Delate  onClick={handleConfirmDelete}>Delate</Delate>
            </BtnCont>
        </DElateContainer>
    </ConfirmWrapper>
  )
}

export default DelateModal