<template>
    <footer id="footer">
        <p>Carros Felipe Gomes &copy; 2024</p>
    </footer>
    <p>footer</p>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    #footer{
        height: 200px;
        background-color: #222;
        border-top: 4px solid #111;
        color: #fcba03;
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
        width: 100%;
        position: absolute;
    }
</style>