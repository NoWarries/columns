import 'highlight.js/styles/atom-one-dark.css';
import highlight from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import highlightVuePlugin from '@highlightjs/vue-plugin';

highlight.registerLanguage('xml', xml);

export default highlightVuePlugin;
