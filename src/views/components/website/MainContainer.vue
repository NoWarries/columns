<script lang="ts">
import {
  IconCode,
  IconMoonFilled,
  IconSunFilled,
  IconArrowsMaximize,
  IconCopy,
} from '@tabler/icons-vue';
import { defineComponent } from 'vue';

let defaultColorScheme = 'dark';
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (!isDark) {
  defaultColorScheme = 'light';
}

export default defineComponent({
  name: 'MainContainer',
  components: {
    IconMoonFilled,
    IconSunFilled,
    IconCode,
    IconArrowsMaximize,
    IconCopy,
  },
  props: {
    title: {
      type: String,
      default: 'Lorem Ipsum',
    },
    canEditScheme: {
      type: Boolean,
      default: false,
    },
    scheme: {
      type: String,
      default: undefined,
    }, // If defined forces scheme to be used rather than default
  },
  data(): any {
    return {
      colorScheme: defaultColorScheme, // ColorScheme being used
      fullscreen: false,
      highlight: '',
    };
  },
  mounted() {
    if (this.scheme !== undefined) {
      this.colorScheme = this.scheme;
    }
  },
  methods: {
    toggleFullscreen() {
      this.fullscreen = !this.fullscreen;
    },
    toggleScheme() {
      this.colorScheme = this.colorScheme === 'dark' ? 'light' : 'dark';
    },
    getSlot() {
      if (this.highlight.length > 0) {
        this.highlight = '';
        return;
      }

      this.highlight = this.format(
        this.$el.querySelector('#preview').innerHTML
      );
    },
    copyCode() {
      const text = this.format(this.$el.querySelector('#preview').innerHTML);
      navigator.clipboard.writeText(text);
    },
    format(html: String) {
      let result = '';
      let indent = '';

      html.split(/>\s*</).forEach(function (element) {
        if (element.match(/^\/\w/)) {
          indent = indent.substring('\x09'.length);
        }

        result += indent + '<' + element + '>\r\n';

        if (element.match(/^<?\w[^>]*[^/]$/) && !element.startsWith('input')) {
          indent += '\x09';
        }
      });

      return result.substring(1, result.length - 3);
    },
  },
});
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <div
      class="m-auto w-11/12 rounded shadow"
      :class="[{ fullscreen: fullscreen }, colorScheme]"
    >
      <div id="preview" class="flex overflow-auto p-2.5">
        <slot>
          <!-- Slot renders here -->
        </slot>
      </div>

      <div role="menu" class="menu flex gap-2 px-5 py-2.5">
        <button
          v-if="canEditScheme"
          title="Toggle colorscheme"
          type="button"
          @click="toggleScheme"
        >
          <IconMoonFilled v-if="colorScheme === 'light'" />
          <IconSunFilled v-if="colorScheme === 'dark'" />
        </button>

        <button title="Get code" type="button" @click="getSlot">
          <IconCode />
        </button>

        <button title="Fullscreen" type="button" @click="toggleFullscreen">
          <IconArrowsMaximize />
        </button>

        <button
          v-if="highlight.length > 0"
          title="Copy code"
          type="button"
          @click="copyCode"
        >
          <IconCopy />
        </button>
      </div>
      <div v-if="highlight.length > 0" id="highlightBox" class="text-left">
        <highlightjs language="xml" :code="highlight" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  max-width: 100%;
  min-width: 100%;
  height: 100%;
  z-index: 10;
  border-radius: 0;
}
.container {
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}
.light {
  @apply bg-atom-one-light-bg;
  @apply text-atom-one-light-fg;
}
.light > .menu {
  @apply bg-atom-one-light-divider;
  @apply text-atom-one-light-fg;
}
.dark {
  @apply bg-atom-one-dark-bg;
  @apply text-atom-one-dark-fg;
}
.dark > .menu {
  @apply bg-atom-one-dark-divider;
  @apply text-atom-one-dark-fg;
}
</style>
