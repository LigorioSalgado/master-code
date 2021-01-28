import Head from 'next/head';
import styles from '../../styles/Home.module.css'


export default function Users(){

    return(
        <div className={styles.container}>
            <Head>
                <title>Users</title>
            </Head>
            <h2>En Users</h2>
        </div>
    )

}