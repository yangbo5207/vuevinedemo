import {onMounted, ref} from 'vue'
import {fetchUsersApi} from './api'
import Skeleton from '../../components/Skeleton.vine'
import Button from '../../components/Button.vine'
import useFetch from '../../hooks/useFetch'

function Dashboard() {
  const {loading, data} = useFetch(fetchUsersApi)

  return vine`
    <div class="w-[700px] mx-auto mt-10">
      <Button @click="loading=true" :disabled="loading">更新列表</Button>
      <Skeleton v-if="loading" class="mt-4" />

      <template v-else v-for="item in data?.results">
        <ListItem  :data="item" />
      </template>
    </div>
  `
}

function ListItem(props: {data: UserInfo}) {
  const {data} = props
  return vine`
    <div class="flex p-4 border border-gray-200 my-4 rounded items-start">
      <img :src="data.picture.thumbnail" alt="" class="rounded-full" />
      <div class="ml-4">
        <div class="font-bold">{{data.name.last}}</div>
        <div class="text-gray-500">
          Vue Vine is a Another style to write Vue.Provide more flexibility for writing Vue. Vue Vine is a Another style to write Vue.Provide more flexibility.
        </div>
      </div>
    </div>
  `
}

export default Dashboard