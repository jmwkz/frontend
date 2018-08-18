<template>
  <div class="home">
    <h1>hello {{ count }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  name: 'home',
  computed: {
    ...mapGetters({
      count: 'getCount'
    })
  }
};
</script>
