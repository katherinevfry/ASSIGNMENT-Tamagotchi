import '../styles/main.scss';
import '../styles/funQuad.scss';
import '../styles/fightQuad.scss';
import '../styles/playQuad.scss';
import '../styles/sleepQuad.scss';
import pageBuilder from './components/pageBuilder';
import buttonClicks from './helpers/domEvents';

const init = () => {
  pageBuilder();
  buttonClicks();
};

init();
