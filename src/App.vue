<script>
	import AppDeck from "./components/AppDeck.vue"
	import AppHeader from "./components/AppHeader.vue"
	import AppSelect from "./components/AppSelect.vue"
	import { store } from "./store.js";
	import axios from 'axios';

	export default{
		components: {
			AppDeck,
			AppHeader,
			AppSelect
		},
		data(){
			return {
				store,
				queryParams: {
					num: 20,
					offset: 0
				}
			}
		},
		methods: {
			getArchetypesFromApi(){
				axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php")
				.then((response) => {
					store.archList = response.data;
				})
			},
			getCardsFromApi(){
					axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php", { params: this.queryParams })
					.then((response) => {
					store.deck = response.data.data;
					console.log("ciaoo!", this.queryParams)
				})
			},
			filterApi(){
				let thisParams = { ...this.queryParams};
				thisParams.archetype = store.filteredArch;

				axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php", { params: thisParams })
				.then((response) => {
				store.deck = response.data.data;
				})
			}
		},
		mounted(){
			this.getArchetypesFromApi(),
			setTimeout(() => {
				this.getCardsFromApi()
				store.loading = false
			}, 2000); //almeno si vede per un tot
		}
	}
</script>

<template>
	<AppHeader></AppHeader>
	<main>
		<AppSelect @filterDeck="store.filteredArch !== '' ? filterApi() : getCardsFromApi()"></AppSelect>
		<AppDeck></AppDeck>
	</main>
</template>

<style lang="scss">
	@use './style/general' as *;
	@use './style/partials/variables' as *;

	main{
        background-color: $main_color;
        padding: 40px 0px;
        min-height: 700px;
    }
</style>