import Header from 'Components/Common/Header';
import Home from 'Containers/Home/Home';
import { BrowserRouter } from 'react-router-dom';

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Header />
            <Home />
        </BrowserRouter>
    );
}

export default App;
