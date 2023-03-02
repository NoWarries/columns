import { Component } from '../model/Component';

import SimpleTwoFactorAuthenticationSection from '../views/components/content/sections/SimpleTwoFactorAuthenticationSection.vue';
import SimpleModal from '../views/components/content/modal/SimpleModal.vue';
import SimpleAlertIconModal from '../views/components/content/modal/SimpleAlertIconModal.vue';
import SimpleInfoIconModal from '../views/components/content/modal/SimpleInfoIconModal.vue';
import BigButtonModal from '../views/components/content/modal/BigButtonIconModal.vue';
import BigButtonIconModal from '../views/components/content/modal/BigButtonModal.vue';
import LoginModal from '../views/components/content/modal/LoginModal.vue';
import ProgressBar from '../views/components/content/steps/ProgressBar.vue';
import VericalIconTimeline from '../views/components/content/timeline/VericalIconTimeline.vue';
import EventCard from '../views/components/content/card/EventCard.vue';

export default [
  new Component(SimpleTwoFactorAuthenticationSection),
  new Component(SimpleModal),
  new Component(SimpleAlertIconModal),
  new Component(SimpleInfoIconModal),
  new Component(BigButtonModal),
  new Component(BigButtonIconModal),
  new Component(LoginModal),
  new Component(ProgressBar),
  new Component(VericalIconTimeline),
  new Component(EventCard),
];
