import styles from './Title.module.css';

export const Title = (props) => {

    const { title } = props;

return  (

    <h1 className={styles.main}>{title}</h1>

)

}





