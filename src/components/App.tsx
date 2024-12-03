import BackgroundHeading from "./BackgroundHeading"
import Header from "./Header"
import Sidebar from "./Sidebar"
import TodoList from "./TodoList"


function App() {
  return (
    <div className="flex justify-center items-center font-sans bg-[#1f1f1f] min-h-screen flex-col">
      <BackgroundHeading />

      <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header />
        <TodoList />
        <Sidebar />
      </main>

      <footer></footer>
    </div>
  )
}

export default App