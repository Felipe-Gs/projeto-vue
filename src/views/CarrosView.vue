<template>
    <div class="main-container">
      <h1>Solicitações de Revisão</h1>
      <Dashboard />
      <h1>Buscar dados especificos</h1>
      <div id="carros-table">
        <div class="table-container">
            <div id="carros-table-heading" class="table-row">
                <div>Homens</div>
                <div>Mulheres</div>
                
                <div>Quantidade Homens</div>
                <div>Quantidade Mulheres</div>
            </div>

            <div id="carros-table-rows">
            <!-- <div v-for="veiculo in veiculos" :key="veiculo.id" class="table-row"> -->
              <div id="carros-table-rows">
          <div v-for="veiculo in veiculos" :key="veiculo.id" class="table-row">
            <div class="carros-table-row">
              <div class="customer-info">
                <div>{{ veiculo.nome }}</div>
                <div>{{ veiculo.sexo }}</div>
                <div>{{ veiculo.sexo === 'Masculino' ? 1 : 0 }}</div>
                <div>{{ veiculo.sexo === 'Feminino' ? 1 : 0 }}</div>
              </div>
            </div>
          </div>
        </div>
        <!-- </div> -->
        </div>
        </div>
        

    </div>
    </div>
</template>

<script>
import Dashboard from '../components/Dashboard.vue';
  export default {
    name: "CarrosView",
    components:{
      Dashboard
    },
    data(){
      return {
        veiculos:[]

      }
    },
    methods:{
      async getCarros() {
        try {
          const req = await fetch('http://localhost:3000/veiculos/');
          const data = await req.json();
          this.veiculos = data;
          console.log(data);
        } catch (error) {
          console.error('Erro ao obter os carros:', error);
        }
      }
    },
    mounted(){
      this.getCarros()
    }
  }
</script>