import styles from './App.module.css';
import TransFer from './TransFer';

const PropData = () => {

    let timeDate_record = [
        {todoData: "Making Simple Todo App" , DateTime : new Date()},
        {todoData: "Doing practice Todo app" , DateTime : new Date()}
    ]

  return (
    <>
        <div className={styles.flex_one_row}>
        {/* input section */}

        <input type="text" placeholder='Enter data value'/>
        <input type="date" />

        <button className={styles.btn_add} style={{margin : '10px 0px 10px 0px'}}>Add</button> <br />

        <div className={styles.align_row}>
        {/* data value */}
        {timeDate_record.map((value,ukIndex)=>(
            <span key={ukIndex}>
                <TransFer transferData={value}/>
            </span>
        ))}
                {/* <button className={styles.btn_delete}>Delete</button> */}
                {/* <center><button className={styles.btn_delete}>Delete</button></center> */}
        </div>

        </div>
    </>
  )
}

export default PropData