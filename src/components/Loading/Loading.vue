<template>
  <div class="loading-content" >
      <h2 class="title">SGQ</h2>
      <div class="quadrado"></div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            displayLoading: this.isLoading
        }
    },
    props: ['isLoading'],

    methods: {
        mostrarLoading(){
            if(this.isLoading === false){
                this.displayLoading = false
                console.log(this.displayLoading)
            }
        }
    }
}
</script>

<style>

.loading-content {
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.774);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    top: 0;
    left: 0;
    position: fixed;

    z-index: 999;
}

.quadrado {
    width: 200px;
    height: 200px;
    animation: cubo-transform 2s infinite;
}

.title {
    color: var(--black_text);
    font-size: 70px;
}

.displayLoading {
    display: none;
}

@keyframes cubo-transform{

    0%{

    border-radius: 0 0 0 0;

    }

    25%{

    border-radius: 0 100% 0 0;

    background-color: var(--card_red);

    }

    50%{

    border-radius: 0 100% 100% 0;

    background-color: var(--card_green);

    }

    75%{

    border-radius: 0 100% 100% 100%;

    background-color: var(--card_orange);

    }

    100%{

    border-radius: 100% 100% 100% 100%;
    }
}



</style>