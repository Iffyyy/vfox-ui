import { VfButton, VfButtonGroup } from './vf-button/index';
import { version } from '../package.json';

const components = [
  VfButton,
  VfButtonGroup
]

const install = function (Vue) {
  components.map(component => Vue.use(component));
  // shell_components.map(el => {
  //     Vue.component(el.name, el.component);
  // });
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  VfButton,
  VfButtonGroup
}

export default {
  version,
  install
}