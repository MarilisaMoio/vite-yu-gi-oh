<script>
    import { store } from "../store.js";
    import GameCard from "./GameCard.vue"

    export default{
        name: 'AppDeck',
        components: {
            GameCard,
        },
        data(){
            return {
                store
            }
        }
    }
</script>

<template>
    <main>
        <div class="container">
            <GameCard v-for="card in store.deck" :key="card.id" :card="card"></GameCard>
        </div>
    </main>
</template>

<style scoped lang="scss">
    main{
        background-color: salmon;
        padding: 40px 0px;
    }

    .container{
        max-width: 1100px;
        background-color: white;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 40px;
        align-content: flex-start;
    }
</style>