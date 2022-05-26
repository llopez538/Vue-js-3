import { ref } from "vue"
import axios from "axios"

const useUser = () => {
    const users        = ref([])
    const isLoading    = ref(true)
    const currentPage  = ref(1)
    const errorMessage = ref()

    const getUsers = async( page = 1) => {

        if(page <= 0) page = 1

        isLoading.value = true

        const { data } = await axios.get('https://reqres.in/api/users', {
            params: { page }
        })
        
        if ( data.data.length > 0 ) {
            users.value = data.data
            currentPage.value = page
            errorMessage.value = null
        } else {
            errorMessage.value = 'No hay mas usuarios'
        }

        isLoading.value = false

    }

    const postUser =  async() => {
        await axios.post('https://reqres.in/api/users', {
            params: {
                name: 'akaska',
                job: 'posta'
            }
        })
        .then( resp => {
            console.log('se creo', resp);
        })
        .catch(console.log)
    }

    postUser()

    getUsers()

    return {
        users,
        isLoading,
        currentPage,
        errorMessage,

        prevPage: () => getUsers( currentPage.value - 1 ),
        nextPage: () => getUsers( currentPage.value + 1 ),

    }
}

export default useUser