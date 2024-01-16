<template>

    <div id="main-banner">
        <h1>Vehicle inspection control</h1>
    </div>
    
</template>

<script>
    export default{
        name: "Banner"
    }
</script>

<style scoped>
    #main-banner {
        background-image: url('/public/img/imagem-de-fundo.jpg');
        background-position: 0 -200px;
        background-size: cover;
        height: 550px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    #main-banner h1{
        color: #fff;
        text-align: center;
        font-size: 60px;
        background-color: #222;
        padding: 20px 40px;
    }
</style>