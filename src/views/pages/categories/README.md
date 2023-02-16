# Categories

## Requirements
- All categories should implement `GenericCategory`
- All categories should only contain `MainContainer` within a `GenericCategory`

```vue
<script lang="ts">
import Container from '../../components/MainContainer.vue';
import GenericCategory from './GenericCategory.vue';
export default {
  components: {
    GenericCategory,
    Container,
  },
};
</script>

<template>
  <GenericCategory title="Category title">
    <Container title="Container title"> <!-- Code here --> </Container>
    <!-- (...) -->
    <Container title="Container title"> <!-- Code here --> </Container>
  </GenericCategory>
</template>
```