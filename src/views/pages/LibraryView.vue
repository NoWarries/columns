<script lang="ts">
import webLib from '../../lib/libary/websiteLibraries.json';

export default {
  name: 'LibraryView',
  data() {
    return {
      websiteLibraries: webLib,
    };
  },
};
</script>

<template>
  <div class="content m-auto w-11/12 text-center">
    <h1>Column Components : <abbr title="Open Source">OS</abbr> Library</h1>
    <p>
      Website is build using various technologies, below I listed some of the
      most crucial ones. Also check out the
      <a
        class="underline"
        target="_blank"
        href="https://github.com/NoWarries/columns/blob/master/package.json"
        >dependencies</a
      >.
    </p>
    <div class="flex flex-col items-center">
      <h2>Website</h2>
      <table class="w-10/12 table-fixed">
        <thead>
          <tr>
            <th>Library</th>
            <th>Use case</th>
            <th>License</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lib in websiteLibraries" :key="lib.name">
            <td>
              <a :href="lib['url']" target="_blank">{{ lib['name'] }}</a>
            </td>
            <td>{{ lib['useCase'] }}</td>
            <td>
              <a :href="lib['licenseUrl']" target="_blank">{{
                lib['license']
              }}</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
thead {
  background: var(--primary-accent);
  color: var(--on-primary-accent);
}
table {
  border: solid var(--primary-accent);
}
</style>
