import styles from '../src/App.module.css'

const TransFer = ({ transferData }) => {
    return (
        <div>
            <span style={{fontFamily:'Arial',fontWeight:'bolder', display:'flex',justifyContent:'flex-start', alignItems:'center'}}>
                {transferData.todoData} {" "} {transferData.DateTime.toLocaleString()}
                <center><button className={styles.btn_delete}>Delete</button></center>
            </span>
        </div>
    )
}

export default TransFer