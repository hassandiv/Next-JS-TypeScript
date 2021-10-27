import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next'
import styles from '../../styles/Home.module.css'
import ItemCard from '../components/ItemCards'

type IResponse = {
  //reponse?: Response | undefined
  json(): Promise<any>
  ok?: boolean | undefined
  statusCode?: number | undefined
}

type Comments = {
  id: number
  postId: number
  name: string
  email: string
  body: string
}

export const getStaticProps: GetStaticProps = async () => {
  const res: IResponse = await fetch(`https://jsonplaceholder.typicode.com/comments`)
  const data: Comments[] = await res?.json()
  const errorCode: number | undefined = res?.ok ? 200 : res?.statusCode
  return {
    props: {
      data: data || [],
      errorCode: errorCode || null
    }
  }
}

const Home: NextPage = ({ data, errorCode }: InferGetStaticPropsType<typeof getStaticProps>) => {
  
  return (
    <div className={styles.container}>
      <h1>Next TS</h1>
      { errorCode > 300 ?
        `${errorCode}. The server encountered an error. Please try again in 30 seconds.`
      :
        <ul>
          {data.length > 0 && data.map((item: Comments) => (
            <ItemCard definedProps={item} key={item.id}/>
          ))}
        </ul>
      }
    </div>
  )
}

export default Home
