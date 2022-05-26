<template>
  <div class="home">
    <h1>{{ ironMan }}</h1>
    <h1>{{ hulk }}</h1>
    <button @click="changeIronMan">Change to Fullname Iron Man</button>
    <button @click="changeHulk">Change to Fullname Hulk</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  name: 'HomeView',

  setup () {
    const ironMan = ref({ name: 'Tony', age: 33 })
    const hulk = reactive({ name: 'Bruce', age: 40 })

    return {
      ironMan, hulk,

      changeIronMan: () => ironMan.value = {name: 'Tony Stark', age: 45},
      changeHulk: () => {
        hulk.name = 'Bruce Banner'
        hulk.age = 55
      }
    }
  }
}
</script>
