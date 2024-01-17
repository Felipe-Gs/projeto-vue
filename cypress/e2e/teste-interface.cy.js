describe("Teste de interface", () => {
   it("hospedagem do site", () => {
      cy.visit("https://projeto-vue-tau.vercel.app/");
   });

   it("Identidade visual aparecendo no site", () => {
      cy.visit("https://projeto-vue-tau.vercel.app/");
      cy.get("#main-banner > h1").should(
         "have.text",
         "Vehicle inspection control"
      );
   });

   it("enviar formulario vazio", () => {
      //teste para verificar a mensagem de erro ao tentar enviar com o formulario vazio
      cy.visit("https://projeto-vue-tau.vercel.app/");
      cy.get(".submit-btn").click();
      cy.get("p").should(
         "have.text",
         "Por favor, preencha todos os campos obrigatórios."
      );
   });

   it("enviar formulario corretamente", () => {
      //teste para verificar o envio de dados corretamente
      cy.visit("https://projeto-vue-tau.vercel.app/");
      cy.get("#nome").type("Felipe gomes");
      cy.get("#idade").type("22");
      cy.get("#sexo").select("Masculino");
      cy.get("#modelo").select("Cruze");
      cy.get("#marca").select("Ford");
      cy.get("#ano").type("2020");
      cy.get("#descricao").select("Reparo no motor");
      cy.get(".submit-btn").click("");
      cy.get("p").should("have.text", "Pedido de reviãao enviado com sucesso!");
   });

   it.only("verificar se foi adicionado o pedido", () => {
      //verificar se foi realmente adicionado o pedido igual o que foi solicitado
      cy.visit("https://projeto-vue-tau.vercel.app/");
      cy.get('[href="/Carros"]').click();
      cy.get("h1").should("have.text", "Solicitações de Revisão");
      cy.get(
         ":nth-child(6) > .carros-table-row > .customer-info > :nth-child(1)"
      ).should("have.text", "Felipe gomes");
      cy.get(
         ":nth-child(6) > .carros-table-row > .customer-info > :nth-child(2)"
      ).should("have.text", "Ford");
   });
});
