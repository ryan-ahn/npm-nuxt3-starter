import { ref } from 'vue';
import { defineStore } from 'pinia';

const useDataStore = defineStore('data', () => {
  // State
  const isOpen = ref<boolean>(false);
  return {
    isOpen,
  };
});

export default useDataStore;
