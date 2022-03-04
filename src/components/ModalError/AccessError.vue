<template>
    <div class="errorBackground">
            
    </div>
</template>

<script>
export default {
    mounted(){
            this.$swal.fire({
              title: 'Acesso Negado!',
              text: 'Você não tem permissão para acessar esta página',
              imageUrl: '/img/accessDenied.gif',
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: 'Custom image',
            }).then(()=>{
                this.$router.push({name:'Startup'})
            })
    }
}
</script>

<style scoped>
.errorBackground{
  background-color: rgb(255, 255, 255);
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  position: absolute;
}

</style>