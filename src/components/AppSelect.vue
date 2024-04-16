<script>
    import { store } from '../store.js';

    export default{
        name: 'AppSelect',
        data(){
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="container">
        <select id="archetype-filter" v-model="store.filteredArch" @change="$emit('filterDeck')">
            <option value="" selected>Nessun filtro impostato</option>
            <option v-for="archetype in store.archList" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
        </select>
    </div>
</template>

<style scoped lang="scss">
    .container{
        max-width: 1100px;
        margin: 20px auto;
    }
</style>