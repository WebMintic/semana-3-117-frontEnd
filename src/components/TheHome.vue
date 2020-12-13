<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">Navbar</a>
                <form class="d-flex">
                    <button class="btn btn-outline-success" type="submit" @click.prevent="logOut">Salir</button>
                </form>
            </div>
        </nav>
        <ul class="list-group">
            <li class="list-group-item"><span>Name: </span>{{user.name}}</li>
            <li class="list-group-item"><span>Email: </span>{{user.email}}</li>
        </ul>

    </div>
</template>

<script>
import vuejwt from 'vue-jwt-decode'

export default {
    data(){
        return{
            user:{}
        }
    },
    methods:{
        logOut(){
            localStorage.removeItem('token');
            //localStorage.removeItem('user');
            this.$router.push('/');
        },
        getUserData(){
            let token = localStorage.getItem('token');
            //let user = localStorage.getItem('user');
            let user = vuejwt.decode(token);
            console.log(user)
            this.user = user
        }
    },
    created(){
        this.getUserData();
    }
}
</script>

<style scoped>

</style>