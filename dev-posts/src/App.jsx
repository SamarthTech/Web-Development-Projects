import './App.css'
import CategoryFilter from './component/CategoryFilter'
import Header from './component/Header'
import PostList from './component/PostList'

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <CategoryFilter />
        <PostList />
      </main>
    </>
  )
}

export default App
