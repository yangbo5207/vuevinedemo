import {twMerge} from 'tailwind-merge'
import clsx from 'clsx'

function Button(props: {
  class?: string,
  primary?: boolean,
  danger?: boolean,
  sm?: boolean,
  lg?: boolean,
  signal?: boolean,
  success?: boolean,
}) {
  const {class: className, primary, danger, sm, lg, signal, success} = props
  const base = 'rounded-md border border-transparent font-medium cursor-pointer transition relative'

  // type
  const normal = 'bg-gray-100 hover:bg-gray-200'

  // size
  const md = 'text-xs py-2 px-4'

  const cls = twMerge(clsx(base, normal, md, {
    // type
    ['bg-blue-500 text-white hover:bg-blue-600']: primary,
    ['bg-red-500 text-white hover:bg-red-600']: danger,
    ['bg-green-500 text-white hover:bg-green-600']: success,
    ['text-sky-500 bg-white border border-sky-300 hover:bg-sky-50']: signal,

    // size
    ['text-xs py-1.5 px-3']: sm,
    ['text-lg py-2 px-6']: lg,
  }, className))

  return vine`
    <button :class="cls">
      <slot />
      <span v-if="signal" class="absolute flex h-3 w-3 right-[-5px] top-[-5px]">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>
    </button> 
  `
}

export default Button