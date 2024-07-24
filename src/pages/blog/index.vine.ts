import {count, increment} from './useCounter'

function Home() {
  return vine`
    <button @click="increment">count++</button>
    <div class="text-green-600">hello home. {{count}}</div>
    <div>
    </div>
  `
}

export default Home