import Header from 'Components/Common/Header';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'Routes';

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Header />
            <Routes />
        </BrowserRouter>
    );
}

export default App;
