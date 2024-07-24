import {ref} from 'vue'

function HelloWorld() {
  const count = ref(0)

  return vine`
    <button @click="count++">
      counter++
    </button>
    <div>{{count}}</div>
  `
}

export default HelloWorld
