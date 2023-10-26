// Root LayOut
// import { AppContainer } from './App.styled';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouterComponent } from '@shared/router/BrowserRouterComponent';
import { LocationDisplay } from '@shared/lib/hooks';



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
            <LocationDisplay />
        </BrowserRouter>
        // </AppContainer>
    );
};

export default App;