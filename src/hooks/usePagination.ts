import {onMounted, ref, watch, Ref} from 'vue'

function usePagination<T>(api: () => Promise<Pagination<T>>) {
  const loading = ref(true)
  const incrementing = ref(false)
  const data = ref({results: [], current: 0}) as Ref<Pagination<T>>

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

  watch(incrementing, () => {
    if (incrementing.value === true) {
      api().then(res => {
        incrementing.value = false
        data.value.current += 1
        data.value.results.push(...res.results)
      })
    }
  })

  return {loading, incrementing, data}
}

export default usePagination