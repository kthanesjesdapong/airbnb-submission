// Root LayOut
// import { AppContainer } from './App.styled';
import { Navigation } from '@features/navigation';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouterComponent } from '@shared/router/BrowserRouterComponent';
import { LocationDisplay } from '@shared/lib/hooks';




const App = () => {

    return (
        // <AppContaine r>
        <BrowserRouter >
            <Navigation />
            <main>
                <BrowserRouterComponent />
            </main>
            <footer>
                footer goes here
            </footer>
            <LocationDisplay />
        </BrowserRouter>
        // </AppContaine>
    );
};

export default App;