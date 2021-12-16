import VfButton from './vf-button.vue';
import VfButtonGroup from './vf-button-group.vue';

VfButton.install = function (Vue) {
  Vue.component(VfButton.name, VfButton);
};

VfButtonGroup.install = function (Vue) {
  Vue.component(VfButtonGroup.name, VfButtonGroup);
};


export {
  VfButton,
  VfButtonGroup
}
