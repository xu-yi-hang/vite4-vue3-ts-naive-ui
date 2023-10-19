export const useGlobalStore = defineStore('global', () => {
  const loading = ref(false)
  function setLoading(value: boolean) {
    loading.value = value
  }
  return {
    loading,
    setLoading
  }
})
