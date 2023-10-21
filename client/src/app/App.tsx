// Root LayOut
// import { AppContainer } from './App.styled';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouterComponent } from '@shared/router/BrowserRouterComponent';



const App = () => {

    return (
        // <AppContainer>
        <BrowserRouter>
            <header>
                nav goes here
            </header>
            <main>
                <BrowserRouterComponent />
            </main>
            <footer>
                footer goes here
            </footer>
        </BrowserRouter>
        // </AppContainer>
    );
};

export default App;