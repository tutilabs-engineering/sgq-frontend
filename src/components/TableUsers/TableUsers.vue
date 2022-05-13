<template>
  <fieldset className="tableContent">
    <legend><i class="fas fa-cog"></i> Controle de Usuários</legend>
    <table cellpadding="0" cellspacing="0">
      <thead>
        <th>Nome</th>
        <th>Matricula</th>
        <th>Email</th>
        <th>Unidade</th>
        <th>Nível de Acesso</th>
        <th>Status</th>
        <th>Opções</th>
      </thead>

      <tbody>
        <tr v-for="user in listUsers" :key="user.id">
          <td style="display: none"></td>
          <td class="codeStartup" data-title="Nome">{{ user.name }}</td>
          <td data-title="Matricula">{{ user.register }}</td>
          <td data-title="Email">{{ user.email }}</td>
          <td data-title="Unidade">{{user.unity.name}}</td>
          <td data-title="Nv. Acesso">{{ user.role.description }}</td>

          <td data-title="Status">
            <form @submit.prevent="ChangeStatus">
              <input type="hidden" :value="user.id" />
              <input
                type="submit"
                @click="ChangeColor"
                v-if="user.is_enabled"
                value="Habilitado"
                class="btn BtnHabilitado"
              />
              <input
                type="submit"
                @click="ChangeColor"
                v-else
                value="Desabilitado"
                class="btn BtnDesabilitado"
              />
            </form>
          </td>

          <td class="lastTd" data-title="Opcoes">
            <div className="opcoes">
              <i class="fas fa-ellipsis-h"></i>
              <div class="dropdown-content">
                <form @submit.prevent="DeleteUser">
                  <input type="hidden" :value="user.id" />
                  <button type="submit" className="btnOpcoes">
                    <i class="fas fa-trash"></i>
                  </button>
                  <a className="btnOpcoes" @click="RedirectForEditUser">
                    <input type="hidden" :value="user.id" />
                    <i class="fas fa-edit"></i>
                  </a>
                </form>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </fieldset>
</template>

<script>
import http from "../../services/account/Users";

export default {
  setup() {},
  name: "Table",
  props: ["listUsers"],

  data() {
    return {
      userChanged: {
        id: "",
        is_enabled: Boolean,
      },
    };
  },

  methods: {
    ChangeStatus: async function (event) {
      var idUserByEvent = event.path[0][0].value;
      var btnValue = event.target[1].value;
      this.userChanged.id = await idUserByEvent;

      if (btnValue === "Habilitado") {
        this.userChanged.is_enabled = true;
      } else {
        this.userChanged.is_enabled = false;
      }

      await http.changeStatus(this.userChanged);
    },
    ChangeColor: function (event) {
      var btnTarget = event.target;
      if (btnTarget.value == "Habilitado") {
        btnTarget.style.backgroundColor = "#e9dfdf";
        btnTarget.style.color = "#444444";
        btnTarget.value = "Desabilitado";
      } else {
        btnTarget.style.backgroundColor = "#5f9dff";
        btnTarget.style.color = "#ffffff";
        btnTarget.value = "Habilitado";
      }
    },

    DeleteUser: async function (event) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-right",
        iconColor: "white",
        customClass: {
          popup: "colored-toast",
          title: "title-swal-text",
        },
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });

      const userId = event.path[0][0].value;

      this.$swal
        .fire({
          title: "Você tem certeza?",
          text: "Esta ação não poderá ser desfeita!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sim deletar!",
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            this.$store.commit("$SETISLOADING");
            await http
              .deleteUser(userId)
              .then(() => {
                Toast.fire({
                  icon: "success",
                  title: "Usuário deletado com sucesso!",
                  background: "#A8D4FF",
                });
              })
              .catch((error) => console.log(error));
            this.$swal
              .fire("Deletado!", "Usuário foi deletado com sucesso", "success")
              .then(() => document.location.reload(true));
            this.$store.commit("$SETISLOADING");
          }
        });
    },
    RedirectForEditUser: function (event) {
      const userId = event.path[2][0].value;
      this.$router.push({ path: "/editarUsuario", query: { id: userId } });
    },
  },
};
</script>

<style scoped>
.dropdown-content {
  display: none;
  background-color: #fff;
  border-radius: 10px;
  min-width: 50px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 15px 5px;
  z-index: 1;
  position: absolute;
}

.fas.fa-trash {
  color: var(--card_red);
}

.fas.fa-edit {
  color: var(--btn_blue);
}

.btn {
  width: 100%;
  height: 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.BtnHabilitado {
  background-color: var(--btn_blue);
  color: var(--main_primaryWhite);
}

.BtnDesabilitado {
  background-color: var(--btn_gray);
  color: var(--black_text);
}

.opcoes:hover .dropdown-content {
  display: block;
}

fieldset {
  border: 1px solid rgba(37, 36, 36, 0.281) !important;
  width: 100%;
  background-color: white !important;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

legend {
  font-size: 30px;
  font-weight: 600;
  color: var(--black_text);
}

.tableContent {
  width: 90%;
  margin-top: 20px;
}

.tableContent table {
  background-color: var(--bg_white);
  width: 100%;
  border-radius: 10px 10px 10px 10px;
  overflow-x: scroll;
}

table th {
  height: 50px;
  font-size: 17px;
  color: var(--black_text);
  padding: 10px 10px 0 10px;
}

.tableContent tr {
  height: 100px;
}

table td {
  border-top: 0.4px solid rgba(0, 0, 0, 0.199);
}

.tableContent td {
  text-align: center;
  height: 50px;
  padding: 0 10px 0 10px;
}

.opcoes {
  display: flex;
  flex-direction: column;
}

.btnOpcoes {
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.btnOpcoes i {
  margin: 0 10px 0 10px;
}

.fa-ellipsis-h {
  color: var(--card_green);
  font-size: 25px;
}

.fa-edit {
  color: var(--black_text);
}
.fa-file-excel {
  color: var(--card_green);
}
.fa-door-closed {
  color: var(--card_blue);
}

.btns {
  display: none;
}

@media (max-width: 1114px) and (min-width: 800px) {
  .tableContent table {
    font-size: 13px;
  }

  .tableContent th {
    font-size: 12px;
  }
}

@media (max-width: 860px) {

  legend {
    text-align: center;
  }

  .tableContent thead {
    display: none;
  }

  .tableButton {
    display: block;
  }

  .tableContent table {
    border-radius: 10px 10px 0 0;
  }

  .tableContent td {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  [data-title] {
    color: var(--black_text);
  }

  .tableContent td:first-of-type {
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .tableContent td:not(:first-of-type):before {
    content: attr(data-title);
    display: block;
    font-weight: bold;
  }

  .lastTd {
    border-bottom: 1px solid var(--green_text);
  }

  .codeStartup {
    font-weight: 600;
    font-size: 20px;
  }

  .tableContent {
    width: 100%;
  }
}
</style>
