import { useContext } from "react";
import { GameContext } from "../../App/GameContext";

  export const useValidateComment = () => {  

    const { comment, setCommentError } = useContext(GameContext);

    return () => {
    if (comment.length != 0) {  
      setCommentError(false);  
      return true;  
    } else {  
      setCommentError(true);  
      return false;  
    }  
  }
}    
    
export const useValidateRating = () => {  

    const { rating, setRatingError } = useContext(GameContext);

    return () => {
    if (parseInt(rating) > 0 && parseInt(rating) < 6) {  
      setRatingError(false);  
      return true;  
    } else {  
      setRatingError(true);  
      return false;  
    }  
  }  
}
