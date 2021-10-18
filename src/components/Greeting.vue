<template>
  <div>
    {{ greeting }}
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import.meta.test = 'test'

const files = import.meta.globEager('./*.css')

export default defineComponent({
  name: 'Greeting',

  data() {
    return {
      greeting: 'Vue and TDD',
    }
  },
})
</script>
