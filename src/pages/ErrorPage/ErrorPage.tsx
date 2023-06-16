import styles from './ErrorPage.module.css';

export default function ErrorPage() {
    return(
        <div className={styles['error-page-container']}>
            Sorry, this page doesn't exist
        </div>
    )
}