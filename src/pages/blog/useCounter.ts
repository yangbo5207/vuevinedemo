import {ref} from 'vue'

export const count = ref(20)

export function increment() {
  count.value++
}
