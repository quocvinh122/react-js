import "./App.css";
import Photos from "./components/photo/Photos";
// import { GlobalStyle } from "./GlobalStyles";
// import Card from "./components/card/Card";
// import Card2 from "./components/card/Card2";
// import CardList from "./components/card/CardList";
// import CardTailwinds from "./components/card/CardTailwinds";
// import { ThemeProvider } from "styled-components";
// const theme = {
//   colors: {
//     blue: '#2979ff',
//   }
// };
function App() {
  return (
    // <ThemeProvider theme={theme}></ThemeProvider>
      // <GlobalStyle></GlobalStyle>
        // <CardList>
        //   <CardTailwinds primary={true} fontSize="text-2xl"></CardTailwinds>
        // </CardList>   
        <div>
          <Photos></Photos>
        </div>    
  );
}

export default App;
