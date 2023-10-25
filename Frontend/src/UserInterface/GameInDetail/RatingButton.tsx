import { useContext, useState } from "react";
import styled from "styled-components";
import { useValidateComment, useValidateRating } from "./ValidateInput";
import { GameContext } from "../../App/GameContext";

const RatingButtonContainer = styled.button`
  background-color: #e6e6e6;
  border: solid 1px #e6e6e6;
  padding: 10px;
  border-radius: 10px;
  width: 20vw;
  cursor: pointer;
  transition: 0.5s;  

   &:hover {
    background-color: #4a4aff;
    color: white;
   }
`;

const OpacityContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0 ,0 ,0 , 0.7); 
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SurveyContainer = styled.div`
  height: 40vh;
  width: 20vw;
  background-image: url("/blueBackground.jpg");
  padding: 10px;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Leave = styled.button`
  height: min-content;
  width: 1.5vw;
  background-color: #ffffff;
  font-size: 1vw;
  cursor: pointer;
  position: relative;
  left: 4.3vw;
  border-radius: 10px;
  border: none;
  color: #a1a1a1;

  &:hover {
    background-color: #FF5630;
    color: white;
  }
`;

const InputRating = styled.input`
  height: 2vh;
  width: 80%;  
  border: none;
  border-radius: 5px;
`;

const InputComment = styled.textarea`
  height: 8vh;
  width: 80%;  
  border: none;
  border-radius: 5px;
`;

const CommentError = styled.span`
  height: max-content;
  font-size: 0.9vw;
  position: absolute;
  top: 39vh;
  color: red;
  font-weight: 1000;
`;

const RatingError = styled(CommentError)`
  top: 52.5vh;
`;

const Submit = styled.button`
  height: 3vh; 
  width: 80%; 
  cursor: pointer;
  border: none; 
  border-radius: 10px;
  transition: 0.5s;

  &:hover {
    background-color: blue;
    color: white;
  }
`;

export const RatingButton = ({ gameId }: { gameId : string | undefined }) => {

const { comment, rating, setComment, setRating, commentError, ratingError } = useContext(GameContext);
  
const [showSurvey, setShowSurvey] = useState(false);

const validateComment = useValidateComment();
const validateRating = useValidateRating();

const submitRating = async () => {
  if (!gameId) {
    console.log('Game ID is not defined.');
    return;
  }
  const ratingData = {
    gameId: parseInt(gameId),
    comment: comment, 
    rating: parseInt(rating)  
  };
try {
  const response = await fetch('http://localhost:8080/rating', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(ratingData)
  });
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  const data = await response.json();
  setShowSurvey(false);
  setComment('');
  setRating('');
} catch (error) {
  console.error('There has been a problem with your fetch operation: '+ error)
  }
}; 

    return (
        <div>
            <RatingButtonContainer onClick={() => setShowSurvey(true)}>
            Make Rating
        </RatingButtonContainer>

        {showSurvey && (
            <OpacityContainer>
                <SurveyContainer>
            <h2>Rate the game</h2>
            <Leave onClick={() => setShowSurvey(false)}>x</Leave>
            {commentError && <CommentError>Please write a Comment</CommentError>}
            <InputComment placeholder="Comment" value={comment} onChange={e => setComment(e.target.value)}/>
            {ratingError && <RatingError>Please write a valid Rating</RatingError>}
            <InputRating type="number" placeholder="Rating 1-5" value={rating} onChange={e => setRating(e.target.value)} />
            <Submit onClick={() => {
              const isCommentValid = validateComment();
              const isRatingValid = validateRating();

              if (isCommentValid && isRatingValid) {
                submitRating();
              }
              }}>Submit Rating</Submit>
            </SurveyContainer>
            </OpacityContainer>
        )}
        </div>
    );
}