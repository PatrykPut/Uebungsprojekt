import { useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Game, GameContext } from "../../../App/GameContext";
import { RecommendedGameCard } from "./RecommendedGameCard";

const RecommendedSidebar = styled.div`
    width: 18vw;
    background-color: lightgrey;
    position: fixed;
    right: 0px;
    height:100%;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const H2 = styled.h2`
    margin-top: 30px;
    height: fit-content;
`;

export const RecommendedGames = () => {

    const context = useContext(GameContext);

    const { allGames } = context;

    const [recommendedGames, setRecommendedGames] = useState<Game[]>([]);
    
    useEffect(() => {
        if (allGames.length >= 3 && recommendedGames.length === 0) {
          const shuffled = [...allGames].sort(() => 0.5 - Math.random());
          setRecommendedGames(shuffled.slice(0, 3));
        }
      }, [allGames, recommendedGames]);

      return (
        <RecommendedSidebar>
            <H2>Recommended Games</H2>
            <div>
            {recommendedGames.map((game) => (
          <RecommendedGameCard key={game.id} game={game}/>
        ))}
            </div>
        </RecommendedSidebar>
      )
}