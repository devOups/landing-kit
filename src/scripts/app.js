import _ from 'lodash'; // example : require lib installed with npm
import Modulito from './modulito';
import '../sass/style.scss';
require('../index.html'); // don't require for prodution, only for development

if (module.hot) {
  module.hot.accept('./modulito', function() {
    console.log('Accepting the updated modulito module!');
    Modulito.log();
  })
}

console.log(_.join(["Yeaaah,", "I'm", "aliiiive", "(#daftpunk)", "!!!"], ' '));
