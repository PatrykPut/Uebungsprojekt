import { useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Game, GameContext } from "../../../App/GameContext";
import { RecommendedGameCard } from "./RecommendedGameCard";

const RecommendedSidebar = styled.div`
    width: 18%;
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

const RecommendedContainer = styled.div`
    
`;

export const RecommendedGames = () => {

    const context = useContext(GameContext);

    const { allGames } = context;

    const [randomGames, setRandomGames] = useState<Game[]>([]);
    
    useEffect(() => {
        if (allGames.length >= 3 && randomGames.length === 0) {
          const shuffled = [...allGames].sort(() => 0.5 - Math.random());
          setRandomGames(shuffled.slice(0, 3));
        }
      }, [allGames, randomGames]);

      return (
        <RecommendedSidebar>
            <H2>Recommended Games</H2>
            <RecommendedContainer>
            {randomGames.map((game) => (
          <RecommendedGameCard key={game.id} game={game}/>
        ))}
            </RecommendedContainer>
        </RecommendedSidebar>
      )
}