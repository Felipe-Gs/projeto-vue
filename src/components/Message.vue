<template>
    <div class="message-container">
        <p>
           {{ msg }}
        </p>
    </div>
</template>

<script>
    export default {
        name: "Message",
        props:{
            msg:String
        }
    }
</script>

<style scoped>
    .message-container{
        color: white;
        background-color: green;
        border: 2px solid green;
        border-radius: 5px;
        padding: 10px;
        width: 500px;
        margin: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>