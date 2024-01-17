describe("Teste de API", () => {
   it("API do sistema", () => {
      cy.request("http://localhost:3000/veiculos").should((response) => {
         expect(response.status).to.eq(200);
      });
   });

   it("Cadastrar um pedido pela API", () => {
      const data = {
         marca: "Toyota",
         modelo: "Corolla",
         nome: "Felipe Gomes",
         idade: 25,
         ano: 2022,
         sexo: "Masculino",
         descricao: "Reparo no motor",
         status: "solicitado",
      };
      cy.request({
         method: "POST",
         url: "http://localhost:3000/veiculos",
         body: data,
         headers: {
            "Content-Type": "application/json",
         },
      }).then((response) => {
         expect(response.status).to.eq(201);
      });
   });

   it("Cancelar um pedido pela API", () => {
      const id = "83f2";
      cy.request({
         method: "DELETE",
         url: `http://localhost:3000/veiculos/${id}`,
         headers: {
            "Content-Type": "application/json",
         },
      }).should((response) => {
         expect(response.status).to.eq(200);
      });
   });

   it("verificar se o item cancelado nao esta mais no banco", () => {
      const id = "2";
      cy.request({
         method: "GET",
         url: `http://localhost:3000/veiculos/${id}`,
         failOnStatusCode: false,
      }).then((getResponse) => {
         // Verificando se a resposta possui o status 404 (Not Found)
         expect(getResponse.status).to.eq(404);
      });
   });

   it.only("Mudar o status de um pedido pela API", () => {
      const id = "def456";
      const novoStatus = "aprovado";

      cy.request({
         method: "PUT",
         url: `http://localhost:3000/veiculos/${id}`,
         headers: {
            "Content-Type": "application/json",
         },
         body: {
            ...this.veiculos.find((veiculo) => veiculo.id === id),
            status: novoStatus,
         },
         failOnStatusCode: false,
      }).then((response) => {
         expect(response.status).to.eq(200);

         cy.request({
            method: "GET",
            url: `http://localhost:3000/veiculos/${id}`,
         }).then((getResponse) => {
            expect(getResponse.body.status).to.eq(novoStatus);
         });
      });
   });
});
