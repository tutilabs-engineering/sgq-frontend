<template>
  <div class="content-configuracao" v-if="showManager">
    <div class="cardsConfiguracao">
      <CardsConfiguracao icon="fas fa-user-alt" title="Perfil" link="/perfil" type="local"/>
      <CardsConfiguracao
        icon="fas fa-cogs"
        title="Gerenciamento"
        link="/cadastroUsuario"
        type="local"
      />


      <CardsConfiguracao
        icon="fas fa-book-reader"
        title="Manual do Sistema"
        link="../../docs/manual_sistema_sgq_v1.pdf"
        type="ex"
      />
    </div>
  </div>

  <div class="content-configuracao" v-else>
    <div class="cardsConfiguracao">
      <CardsConfiguracao icon="fas fa-user-alt" title="Perfil" link="/perfil" type="local"/>

      <CardsConfiguracao
        icon="fas fa-book-reader"
        title="Manual do Sistema"
        link="../../docs/manual_sistema_sgq_v1.pdf"
        type="ex"
      />

    </div>
  </div>
</template>

<script>
import jwt from "jsonwebtoken";
import http from "../services/account/Users";
import Cookie from 'js-cookie'

import CardsConfiguracao from "../components/CardsConfiguracoes/CardsConfiguracao.vue";

export default {
  name: "Configuracoes",
  components: { CardsConfiguracao },

  data() {
    return {
      showManager: false,
    };
  },

  created: async function () {
    this.$store.commit("$SETISLOADING");
    const secretQuefunciona =
      "cf2cf1732834hh4hsg657tvdbsi84732492ccF=2=eyfgewyf6329382¨&%$gydsu";

    const token = Cookie.get("token");

    if (token) {
      try {
        const { sub } = await jwt.verify(token, secretQuefunciona);

        await http
          .findUserById(sub)
          .then((response) => {
            const role = response.data.user.role.id;
            if (role === 1 || role === 2) {
              this.showManager = true;
            }
          })
          .catch((error) => {
            console.log("erro", error);
          });
      } catch (error) {
        console.log(error);
      }
    }

    this.$store.commit("$SETISLOADING");
  },
};
</script>

<style scoped>
.content-configuracao {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cardsConfiguracao {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

@media (max-width: 650px) {
  .cardsConfiguracao {
    flex-direction: column;
  }
}
</style>
