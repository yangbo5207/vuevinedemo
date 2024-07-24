import Background from './background.vine'

function Index() {
  return vine`
    <div class="relative">
      <Background />

      <div class='max-w-[1050px] mx-auto px-4'>
        <div class="mt-20 max-w-[750px]">
          <h2 class='text-lg font-bold'>Vue Vine</h2>

          <p class="mt-4 text-gray-500 leading-6 text-md">
            全网第一个 Vue Vine 深度使用案例。
          </p>
          <p class="text-md mt-4 text-gray-500 leading-6">
            Vue Vine 更彻底的拥抱了函数式，和 Vue3 相比，它的语法变得更加简洁，理解成本更低，开发体验更好
          </p>

          <div class='mt-8'>
            <Link to='tutorial/index' class='inline-flex items-center px-5 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm rounded-full'>
              <span class='mr-2'>快速开始</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </Link>

            <a href="" class='inline-flex px-4 py-2 text-gray-600 ring-1 ring-gray-200 text-sm rounded-full ml-4'>
              <span>关注公众号</span>
            </a>
            
            <div class="mt-20 max-w-[750px]">
              <h2 class='text-[20px] font-bold'>学前准备</h2>
              <div class='flex items-center text-gray-600 mt-8'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <div class='ml-2'>熟练掌握 Vue3 极其相关生态</div>
              </div>

              <div class='flex items-center text-gray-600 mt-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <div class='ml-2'>掌握基础的 TypeScript 能力</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

export default Index