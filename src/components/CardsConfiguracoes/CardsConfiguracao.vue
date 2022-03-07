<template>

    <router-link :to="link">
        <div class="cardConfiguracao">
            <i :class="icon"></i>
            <h2>{{title}}</h2>
        </div>
    </router-link>

</template>

<script>
export default {
    name: "CardConfiguracao",
    props: ['title', 'icon', 'link'],
    data() {
    return {};
  },

}
</script>

<style scoped>

.cardConfiguracao {
    cursor: pointer;
    background-color: var(--main_primaryWhite);
    border-radius: 10px;
    width: 100%;
    height: 300px;
    text-align: center;
    color: var(--bg_green);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: 0.5s;
    padding: 20px;
    margin: 100px;
}

.cardConfiguracao:hover {
    background-color: var(--card_green);
    color: var(--main_primaryWhite);
    transform: scale(1.1);
}


.fas {
    font-size: 120px;
}

a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    
}

@media (max-width: 1200px){

    a {
        width: 100%;
    }
    .cardConfiguracao {
        margin: 10px;
    }
}

@media (max-width: 765px) {
    a {
        padding: 0;
        margin-bottom: 30px;
        width: 100%;
    }

    
}

</style>