<template>
    <div class="content-header">
        <span class="collapse-icon" @click="toggleSidebar" :class="{ 'rotate-180':collapsed }"><i class="fas fa-bars"></i></span>
        <h2 class="title">{{titlePage}}</h2>
        
        
    </div>
</template>

<script>

import { collapsed, toggleSidebar, sidebarWidth} from '../SideBar/state'

export default {
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth}
    },

    props: ['titlePage']

}
</script>



<style scoped>
    .content-header {
        background-color: var(--card-color);
        position: fixed;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: calc(100% - 60px);
        height: 10vh;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.466);
        z-index: 2;
        word-wrap: break-word;
        padding: 10px;

    }

    .collapse-icon {
        font-size: 26px;
        color: var(--main-color);
        padding: 0.75em;
        transition: 0.3s linear;
    }

    .rotate-180 {
        transform: rotate(180deg);
        transition: 0.3s linear;
    }

    .title {
        font-size: max(1.3rem, 1rem);
        color: var(--font-color);
        margin-left: 5px;
    }
</style>

