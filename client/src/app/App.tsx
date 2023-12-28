//Root LayOut
import { Navigation } from '@features/navigation';
import { BrowserRouter } from 'react-router-dom';
import { AppRouterComponent } from '@app/routes/AppRouterComponent';
import { LocationDisplay } from '@shared/lib/hooks';
import { Footer } from '@shared/ui';
const App = () => {



    return (
        <BrowserRouter >
            <Navigation />
            <main>
                <AppRouterComponent />
            </main>
            <Footer />
            <LocationDisplay />
        </BrowserRouter>
    );
};

export default App;