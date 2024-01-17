<template>
    <div class="message">
        <Message :msg="msg" v-show="msg"/>
    </div>
    <div id="carros-table">
        <div class="table-container">
            <div id="carros-table-heading" class="table-row">
                <div>Cliente</div>
                <div>Marca</div>
                <div>Modelo</div>
                <div>Descrição</div>
                <div>Status</div>
                <div>Ação</div>
            </div>

            <div id="carros-table-rows">
            <div v-for="veiculo in veiculos" :key="veiculo.id" class="table-row">
            <div class="carros-table-row">
                <div class="customer-info">
                    <div> {{ veiculo.nome }}</div>
                    <div> {{ veiculo.marca }}</div>
                    <div>{{ veiculo.modelo }}</div>
                    <div> {{ veiculo.descricao }}</div>
                    <div>
                        <div> {{ veiculo.status }}</div>
                            <div>
                                <select v-model="veiculo.novoStatus" class="status">
                                <option value="solicitado">Solicitado</option>
                                <option value="em-producao">Em Produção</option>
                                <option value="finalizado">Finalizado</option>
                                </select>
                                <button @click="atualizarStatus(veiculo.id, veiculo.novoStatus)" class="update-status-btn">Atualizar Status</button>
                            </div>
                        </div>
                    <div>
                        <button @click="cancelarPedido(veiculo.id)" class="delete-btn">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        

    </div>
</template>

<script>
import Message from './Message.vue'
    export default{
        name: "Dashboard",
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
            async cancelarPedido(id) {
                try {
                    const response = await fetch(`http://localhost:3000/veiculos/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    });
                    if (response.ok) {
                        await this.getCarros();
                        console.log(`Pedido com ID ${id} cancelado.`);
                        } else {
                        console.error(`Erro ao cancelar o pedido com ID ${id}.`);
                    }
                } catch (error) {
                    console.error("Erro ao cancelar o pedido:", error);
                }
                this.msg = `Pedido deletado com sucesso!`
                setTimeout(()=> this.msg ="", 2000)
            },

            async atualizarStatus(id, novoStatus) {
            try {
                const response = await fetch(`http://localhost:3000/veiculos/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...this.veiculos.find(veiculo => veiculo.id === id),  
                    status: novoStatus,
                }),
                });

                if (response.ok) {
                await this.getCarros();
                console.log('Status alterado com sucesso');
                } else {
                console.log('Erro ao atualizar o status');
                }
            } catch (error) {
                console.error(error);
            }
            }
        },
        components:{
            Message
        },
        mounted(){
        this.getCarros()
        },
    }
</script>

<style>
    #carros-table {
        max-width: 1200px;
        margin: 0 auto;
    }

    .table-container {
        border: 1px solid #ccc;
        border-radius: 8px;
        overflow: hidden;
    }

    .table-row {
        display: flex;
        border-bottom: 1px solid #ccc;
    }

    #carros-table-heading {
        font-weight: bold;
        background-color: #f2f2f2;
    }

    .table-row > div {
        flex: 1;
        padding: 12px;
        text-align: left;
    }

    .customer-info {
        display: flex;
        flex-wrap: wrap;
    }

    .customer-info > div {
        flex: 1;
        padding: 8px;
    }

    .table-actions {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 12px;
    }

    .status {
        margin-right: 8px;
    }

    .delete-btn {
        background-color: #dc3545;
        color: #fff;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
    }
    .message{
        display: flex;
        
        justify-content: center;
        align-items: center;
    }
</style>