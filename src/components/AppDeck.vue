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
        <div class="container">
            <template v-if="!store.loading">
                <div class="search-results">La ricerca ha prodotto {{ store.deck.length }} risultati</div>
                <div class="deck">
                    <GameCard v-for="card in store.deck" :card="card" :key="card.id"></GameCard>
                </div>
            </template>
            <img v-else="store.loading" src="https://i.redd.it/xo7baaby2ac31.gif">
        </div>
</template>

<style scoped lang="scss">
    @use '../style/partials/variables' as *;

    .container{
        max-width: 1100px;
        background-color: white;
        margin: 0 auto;
        .deck{
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            padding: 40px;
            align-content: flex-start;
        }
    }

    img{    
        display: block;
        margin: 0 auto;
        }

    .search-results{
            text-align: center;
            padding-top: 20px;
            font-size: 1.4rem;
        }
</style>