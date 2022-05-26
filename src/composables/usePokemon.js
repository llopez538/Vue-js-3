import axios from 'axios'
import { ref, unref } from 'vue'


const usePokemon = ( pokemonId = 1 ) => {

    const pokemon = ref()
    const isLoading = ref(false)
    const errorMessage = ref()

    const searchPokemon = async( id ) => {

        if (!id ) return

        isLoading.value = true
        pokemon.value = null

        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ id }`)
            pokemon.value = data
            errorMessage.value = null

            //console.log(data.sprites.front_default);

        } catch (error) {
            errorMessage.value = 'No se pudo cargar ese pokemon'
        }

        isLoading.value = false
    }

    const changeName = ( newName ) => {
        // pokemon.value.set
        // const data = { ...unref(pokemon) }
        // console.log({data});
        // data.name = newName
        pokemon.value.name = newName
    }

    searchPokemon( pokemonId )

    return {
        pokemon,
        isLoading,
        errorMessage,
        searchPokemon,
        changeName
    }
}

export default usePokemon