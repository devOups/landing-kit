import Modulito from './modulito';
import '../sass/style.scss';

if (module.hot) {
  module.hot.accept('./modulito', function() {
    console.log('Accepting the updated modulito module!');
    Modulito.log();
  })
}

console.log("Yeaaah, I'm aliiiive (#daftpunk), Harder Better Faster Stronger !!!");