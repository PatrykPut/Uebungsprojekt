import Navbar from './navbar';
import GameContainer from './GameContainer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Courier New', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;  
  }
`;

function App() {
  return (
    <>
    <GlobalStyle/>
      <div className='main'>
        <Navbar/>
        <GameContainer/>
      </div>
      </>
  );
};

export default App; 

