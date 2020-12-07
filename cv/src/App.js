import LandingPage from './pages/LandingPage';
import './App.css';
import { AwesomeButton } from "react-awesome-button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import styles from 'react-awesome-button/src/styles/themes/theme-amber';

function App() {
  return (
    <div className="App">
      <AwesomeButton
        className="floating-btn no-print"
        size="small"
        type="primary"
        onPress={() => window.print()}
      >
        <FontAwesomeIcon icon={faPrint} />
        PRINT
      </AwesomeButton>

      <LandingPage />
    </div>
  );
}

export default App;
