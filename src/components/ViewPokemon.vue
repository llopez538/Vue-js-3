<template>
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.other.dream_world.front_default" :alt="pokemon.name">
    <img  v-if="!pokemon.sprites.other.dream_world.front_default" :src="pokemon.sprites.front_default" :alt="pokemon.name">
    <br>
    <input type="text" v-model="pokemon.name">
    <router-link :to="{ name: 'pokemon-search'}">Regresar</router-link>
</template>

<script>

export default {
    props: {
        pokemon: {
            type: Object,
            require: true
        }
    },
    setup () {

    }
}

</script>

<style>

</style>