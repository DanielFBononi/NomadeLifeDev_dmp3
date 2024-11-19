import styles from './home.module.css'
import logo from '/LogoQuadrado.png'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import PostDetail from '../../components/PostDetail'

const Home = () => {

  const { document: posts, loading} = useFetchDocuments("posts")
  const navigate = useNavigate()

  const [querry, setQuerry] =useState('')

  const handlersubmit = (e) => {
    e.preventDefault()
    if (querry) {
      return navigate(`/search?q=${querry}`)
    }
  }
console.log(loading)


  return (
    <div className={styles.home}>
      <h2>Veja nossos posts recentes</h2>
      <form className={styles.search_form} onSubmit={handlersubmit}>
        <input type="text"
              placeholder="Busque posts aqui"
              onChange={(e) => setQuerry(e.target.value) }
        />
      </form>
      <div className='post-list'>
        {loading && <p>Careegando...</p>}
        {posts && posts.lenght === 0 && (
          <div className={styles.noposts}>Nao encontramos postagens
          <Link to={"/posts/create"} className='btn'>
            Crie esse post
          </Link>
          </div>
        )}
        {posts && posts.map((post) => <PostDetail key={post.id} post={post}/>)}
      </div>
    </div>
  )
}

export default Home
