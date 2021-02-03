import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.scss'
import axios from 'axios';


const wait = () => new Promise((resolve) =>{
    setTimeout(resolve,3000)
})

export async function getServerSideProps(){
    // aqui puedo hacer llamdas a API
    //Cuando: Cada vez que se hace una peticion al servidor o cad vez que pido la ruta
    // Que: cuando sabemos que los datos cambian muy seguido
    // await wait();

    const response = await axios.get('https://dummyapi.io/data/api/user?limit=10',{
        headers:{
        'app-id': '6011f27d538b828b65127ff9'
    }}).catch(err => console.log(err));
    const { data } =  response; 

    return {
        props:{
            users:data
        }
    }

}

export default function Users(props){

    return(
        <div className={styles.container}>
            <Head>
                <title>Users</title>
            </Head>
            <h2>En Users</h2>
            {
                props.users.data.map(user => 
                <Link href={`/users/${user.id}`}>
                    <a>
                    {user.firstName}{' '}{user.lastName} 
                    </a>
                </Link>
                )
            }
        </div>
    )

}