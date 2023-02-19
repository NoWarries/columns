import SimpleTwoFactorAuthenticationSection from '../views/components/content/sections/SimpleTwoFactorAuthenticationSection.vue';
import SimpleModal from '../views/components/content/modal/SimpleModal.vue';
import SimpleAlertIconModal from '../views/components/content/modal/SimpleAlertIconModal.vue';
import SimpleInfoIconModal from '../views/components/content/modal/SimpleInfoIconModal.vue';
import BigButtonModal from '../views/components/content/modal/BigButtonIconModal.vue';
import BigButtonIconModal from '../views/components/content/modal/BigButtonModal.vue';

import { Component } from '../model/Component';

export default [
  new Component(SimpleTwoFactorAuthenticationSection),
  new Component(SimpleModal),
  new Component(SimpleAlertIconModal),
  new Component(SimpleInfoIconModal),
  new Component(BigButtonModal),
  new Component(BigButtonIconModal),
];
