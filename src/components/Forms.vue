<template>
    
    <p>Componente de mensagem</p>
    <div>
        <form id="Carros-forms">
            <div class="input-container">
                <label for="nome">Nome do cliente</label>
                <input type="text" id="nome" name="nome" v-model="nome" placeholder="digite seu nome">
            </div>

            <div class="input-container">
                <label for="tipo_carro">Escolha o modelo</label>
                <select name="modelo" id="modelo" v-model="modelo">
                    <option value="">Selecione o modelo do carro</option>
                    <option value="Corrola">Corrola</option>
                    <option value="Civic">Civic</option>
                </select>
            </div>

            <div class="input-container">
                <label for="tipo_carro">Escolha a marca</label>
                <select name="marca" id="marca" v-model="marca">
                    <option value="">Selecione a marca do carro</option>
                    <option value="Toyota">Toytoa</option>
                    <option value="Honda">Honda</option>
                </select>

            </div>

            <div class="input-container">
            <label id="input-title" for="sexo">sexo</label>
            <div class="checkbox-container">
                
                    <input type="checkbox" name="sexo" v-model="sexo" value="Masculino">
                    <span>Masculino</span>
                
                
                    <input type="checkbox" name="sexo" v-model="sexo" value="Feminino">
                    <span>Feminino</span>
                
            </div>
    </div>
    <div class="input-container">
    <input type="submit" class="submit-btn" value="Adicionar">
</div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Forms"
    }
</script>

<style scoped>
    #Carros-forms{
        max-width: 400px;
        margin: 0 auto;
    }
    .input-container{
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }
    label{
        font-weight: bold;
        margin-bottom: 20px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid #fcba03;
    }
    input, select{
        padding: 5px 10px;
        width: 300px;
    }
    .checkbox-container {
        display: flex;
        flex-direction: row;  
        justify-content: center;
        align-items: center;
    }
.checkbox-container span, .checkbox-container input {
        width: auto;
}   
.checkbox-container span{
    margin-left: 6px;
    font-weight: bold;
}
.submit-btn{
    background-color: #222;
    color: #fcba03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    transition: .5;
    cursor: pointer;
}
.submit-btn:hover{
    background-color: transparent;
    color: #222
}

</style>