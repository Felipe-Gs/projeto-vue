<template>
    
    <div class="div-container">
        <Message :msg="msg" v-show="msg"/>
        <form id="Carros-forms" @submit="createCarro">
            <div class="input-container">
                <label for="nome">Nome do cliente</label>
                <input type="text" id="nome" name="nome" v-model="nome" placeholder="digite seu nome">
            </div>

            <div class="input-container">
                <label for="nome">Idade do cliente</label>
                <input type="text" id="idade" name="idade" v-model="idade" placeholder="digite sua idade">
            </div>

            <div class="input-container">
                <label id="input-title" for="sexo">sexo</label>
                <select name="sexo" id="sexo" v-model="sexo">
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    
                </select>
            </div>

            <div class="input-container">
                <label for="tipo_carro">Modelo do carro</label>
                <select name="modelo" id="modelo" v-model="modelo">
                    <option value="">Selecione o modelo do carro</option>
                    <option v-for="carro in veiculos" :key="carro.id" :value="carro.modelo">{{ carro.modelo }}</option>
                    
                </select>
            </div>

            <div class="input-container">
                <label for="tipo_carro">Marca do carro</label>
                <select name="marca" id="marca" v-model="marca">
                    <option value="">Selecione a marca do carro</option>
                    <option v-for="carro in veiculos" :key="carro.id" :value="carro.marca">{{carro.marca}}</option>
                    
                </select>
            </div>

            <div class="input-container">
                <label for="ano">Ano do carro</label>
                
                <input type="text" id="ano" name="ano" v-model="ano" placeholder="Ano do carro">
            </div>

            <div class="input-container">
                <label for="ano">Descrição do que fazer</label>
                
                <select name="descricao" id="descricao" v-model="descricao">
                    <option value="">Descricao do que fazer</option>
                    <option value="Verificação geral">Verificação geral</option>
                    <option value="Substituição de peças">Substituição de peças</option>
                    <option value="Troca de óleo">Troca de óleo</option>
                    <option value="Reparo no motor">Reparo no motor</option>
                </select>
            </div>

    <div class="input-container">
    <input type="submit" class="submit-btn" value="Adicionar">
</div>
        </form>
    </div>
</template>

<script>
import Message from './Message.vue';
    export default {
  components: { Message },
        name: "Forms",
        data(){
            return{
                veiculos: [],
                marca: null,
                modelo: null,
                nome: null,
                idade: null,
                ano: null,
                sexo: null,
                descricao: null,
                msg: null,
            }
        },
        methods: {
            async getCarros() {
                try {
                    const req = await fetch('http://localhost:3000/veiculos/');
                    const data = await req.json();
                    this.veiculos = data;
                    console.log(data);
                } catch (error) {
                    console.error('Erro ao obter os carros:', error);
                }
            },
            async createCarro(e){
                e.preventDefault();
                if (!this.nome || !this.idade || !this.modelo || !this.marca || !this.ano || !this.sexo || !this.descricao) {
                    this.msg = "Por favor, preencha todos os campos obrigatórios.";
                    setTimeout(() => (this.msg = ""), 2000);
                    return;
                }
                const data = {
                    marca: this.marca,
                    modelo: this.modelo,
                    nome: this.nome,
                    idade: this.idade,
                    ano: this.ano,
                    sexo: this.sexo,
                    descricao: this.descricao,
                    status: 'solicitado'
                }
                // console.log(data);
                const dataJson = JSON.stringify(data)

                const req = await fetch('http://localhost:3000/veiculos', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: dataJson
                })
                this.msg = "Pedido de reviãao enviado com sucesso!"

                const res = await req.json()
                console.log(res)
                this.marca =''
                this.modelo =''
                this.nome =''
                this.idade =''
                this.sexo =''
                this.descricao =''

                setTimeout(()=> this.msg ="", 2000)
                
            }
        },

        mounted(){
            this.getCarros()
        },
        components: {
            Message
        }
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

    .div-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
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
        justify-content: space-around;
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