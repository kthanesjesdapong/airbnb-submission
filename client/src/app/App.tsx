// Root LayOut
import { Outlet } from 'react-router-dom';
import { AppContainer } from './App.styled';

const App = () => {

    return (
        <AppContainer>
            <header>
                nav goes here
            </header>
            <main>
                main content goes here
                <Outlet />
            </main>
            <footer>
                footer goes here
            </footer>
        </AppContainer>
    );
};

export default App;