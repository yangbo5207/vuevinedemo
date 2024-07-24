import {onMounted, ref, watch} from 'vue'

function useFetch<T>(api: () => Promise<T>) {
  const loading = ref(true)
  const data = ref<T>()

  onMounted(() => {
    api().then(res => {
      loading.value = false
      data.value = res
    })
  })

  watch(loading, () => {
    if (loading.value === true) {
      api().then(res => {
        loading.value = false
        data.value = res
      })
    }
  })

  return {loading, data}
}

export default useFetch