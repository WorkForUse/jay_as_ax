import styles from './App.module.css';
import PropData from './PropData';

const App = () => {
  return (
    <div className={styles.container}>
          <h1 className={styles.centerAlign}>T O D O</h1>
          <hr />
          <PropData/>
    </div>
  )
}

export default App