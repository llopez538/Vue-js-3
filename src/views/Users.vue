<template>
    <h1 v-if="isLoading">Espere por favor...</h1>
    <h2 v-else>Usuarios</h2>
    <h5 v-if="errorMessage">{{ errorMessage }}</h5>

    <div v-if="users.length > 0">
        <section class="father-user">
            <div v-for="{ avatar, first_name, last_name, email, id } in users" :key="id" class="card-user">
                <img :src="avatar" :alt="first_name">
                <div class="cad-content">
                    <h4>{{ first_name }} {{ last_name }}</h4>
                    <h6>{{ email }}</h6>
                </div>
            </div>
        </section>
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

.card-content {
    display: block;
}

.father-user, .card-user {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}
</style>