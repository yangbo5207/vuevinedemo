import {onMounted, ref} from 'vue'
import {fetchUsersApi} from './api'
import Skeleton from '../../components/Skeleton.vine'
import Button from '../../components/Button.vine'
import usePagination from '../../hooks/usePagination'

function Dashboard() {
  const {loading, incrementing, data} = usePagination(fetchUsersApi)

  return vine`
    <div class="w-full max-w-[500px] mx-auto mt-10 sm:mt-20">
      <Button @click="loading=true" :disabled="loading">更新列表</Button>
      <Skeleton v-if="loading" class="my-4 text-sm" />

      <template v-else v-for="item in data?.results">
        <ListItem  :data="item" />
      </template>

      <Skeleton v-if="incrementing" class="my-4" />
      <div v-if="!incrementing" class="flex justify-center">
        <Button @click="incrementing=true" signal>点击加载更多</Button>
      </div>
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