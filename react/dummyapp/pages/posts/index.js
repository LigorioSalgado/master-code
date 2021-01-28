import Head from 'next/head';
import styles from '../../styles/Home.module.css'
import axios from 'axios';


export async function getStaticProps() {
    // aqui puedeo hacer llamdas a API y pasar el resltado como props

    // axios.get('https://dummyapi.io/data/api/post?limit=10',{
    //     headers:{
    //     'app-id': '6011f27d538b828b65127ff9'
    // }}
    // ).then(response => response)
    // .catch(error => error );

    // async / await --> otra forma de resolver promesas

    const response = await axios.get('https://dummyapi.io/data/api/post?limit=10',{
        headers:{
        'app-id': '6011f27d538b828b65127ff9'
    }}).catch(err => console.log(err));
    console.log(response.data);
    const { data } =  response; 

    return {
        props:{
            posts:data
        }
    }

};
export default function Posts(props){

    return(
        <div className={styles.container}>
            <Head>
                <title>Posts</title>
            </Head>
            <h2>En Posts</h2>
            {props.posts.data.map(element => <li>{element.text}</li>)}
        </div>
    )

}

