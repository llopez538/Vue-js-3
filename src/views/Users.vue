<template>
    <h1 v-if="isLoading">Espere por favor...</h1>
    <h2 v-else>Usuarios</h2>
    <h5 v-if="errorMessage">{{ errorMessage }}</h5>

    <div v-if="users.length > 0">
        <ul>
            <li v-for="{first_name, last_name, email, id} in users" :key="id">
                <h4>{{ first_name }} {{ last_name }}</h4>
                <h6>{{ email }}</h6>
            </li>
        </ul>
    </div>

    <button @click="prevPage">Atras</button>
    <span>Página: {{ currentPage }}</span>
    <button @click="nextPage">Siguiente</button>
</template> 

<script>
import useUser from '@/composables/useUsers'
import axios from 'axios'

export default {
    
    setup() {

        const { isLoading, errorMessage, users, currentPage, prevPage, nextPage } = useUser()
        
        return { isLoading, errorMessage, users, currentPage, prevPage, nextPage }
    }

}
</script>

<style scoped>
h2 {
    text-align: center;
    width: 100%;
}

div {
    display: flex;
    justify-content: center;
    text-align: center;
}

ul {
    width: 250px;
}

li {
    list-style: none;
    background-color: #c3c3c3;
    border-radius: 20px;
    padding: 10px 0;
    margin-bottom: 5px;
}
</style>