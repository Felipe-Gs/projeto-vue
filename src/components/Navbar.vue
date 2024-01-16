<template>
    <div id="nav">
    <div>
        <router-link to="/" id="logo-url">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>   
    </div>
    <div>
        <router-link to="/">Home</router-link> 
        <router-link to="/Carros">Carros</router-link>

    </div>
</div>
</template>

<script>
    export default {
        name: "Navbar",
        props: ["logo", "alt"]
    }
</script>

<style>
    #nav{
        background-color: #222;
        border-bottom: 4px solid #111;
        padding: 15px 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #logo-url{
        margin: auto;
        margin-left: 0;
       
    }
   #nav #logo{
        width: 40px;
        height: 40px;
    }
    #nav a{
        color: #FCBA03;
        text-decoration: none;
        margin: 12px;
        transition: 0.5;
    }
    #nav a:hover{
        color: #fff;
    }
</style>