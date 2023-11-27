//Root LayOut
import { Navigation } from '@widgets/navigation';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouterComponent } from '@shared/router/BrowserRouterComponent';
import { LocationDisplay } from '@shared/lib/hooks';
import { Footer } from '@features/Footer';





const App = () => {

    return (
        <BrowserRouter >
            <Navigation />
            <main>
                <BrowserRouterComponent />
            </main>
            <Footer />
            <LocationDisplay />
        </BrowserRouter>
    );
};

export default App;