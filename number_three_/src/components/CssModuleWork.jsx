import styles from '../components/Cmw.module.css'

const CssModuleWork = () => {
  return (
    <>
        <nav>
            <ul className={styles["unOrdered_list"]}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </>
  )
}

export default CssModuleWork