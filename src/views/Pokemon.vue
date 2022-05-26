<template>
    <h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
    <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>
    <ViewPokemon v-else :pokemon="pokemon" :changeName="changeName" />
</template>

<script>
import { watch } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import usePokemon from '@/composables/usePokemon'
import ViewPokemon from '@/components/ViewPokemon.vue'

export default {
    components: { ViewPokemon },
    setup() {
        const route = useRoute();

        
        const { pokemon, isLoading, errorMessage, searchPokemon, changeName } = usePokemon(route.params.id);
        
        watch(() => route.params.id, () => searchPokemon(route.params.id));
        
        onBeforeRouteLeave(() => {
            const answer = window.confirm("¿Está seguro que desea salir?");
            if (!answer)
                return false;
        });
        
        return {
            pokemon,
            isLoading,
            errorMessage,
            searchPokemon,
            changeName
        };
    }
}

</script>

<style>

</style>