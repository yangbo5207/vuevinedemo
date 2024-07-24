import Button from './components/Button.vine'
import NavHeader from './components/NavHeader/index.vine'

function App() {
  return vine`
    <NavHeader />
    <main class="pt-16 m-1 m-2.5">
      <RouterView />
      <div class="m-1 text-2xl"></div>
      <div>
      </div>
    </main>
  `
}

export default App
