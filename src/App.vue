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
					console.log(store.archList)
				})
			},
			getCardsFromApi(){
				setTimeout(() => {
					axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php", { params: this.queryParams })
					.then((response) => {
					store.deck = response.data.data;
					store.loading = false
				})
				}, 2000); //almeno si vede per un tot
			},
			filterApi(){
				if (store.filteredArch !== ""){
					this.queryParams.archetype = store.filteredArch
				} else{
					delete this.queryParams.archetype
				};

				axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php", { params: this.queryParams })
				.then((response) => {
				store.deck = response.data.data;
				console.log = response.data.data;
				})
			}
		},
		mounted(){
			this.getArchetypesFromApi(),
			this.getCardsFromApi()
		}
	}
</script>

<template>
	<AppHeader></AppHeader>
	<main>
		<AppSelect @filterDeck="filterApi"></AppSelect>
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