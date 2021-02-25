import '../styles/main.scss';
import pageBuilder from './components/pageBuilder';
import buttonClicks from './helpers/domEvents';

const init = () => {
  pageBuilder();
  buttonClicks();
};

init();
