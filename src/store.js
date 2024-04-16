import { reactive } from "vue";

export const store = reactive({
    archList: [],
    deck: [],
    loading: true,
    filteredArch: ""
});