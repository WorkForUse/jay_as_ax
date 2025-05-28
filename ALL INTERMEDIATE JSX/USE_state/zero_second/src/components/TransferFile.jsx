import './cl.css';
const TransferFile = ({cButton,handleLogic}) => {
    return (
        <div>
            <button className="adjustmnt" onClick={() => handleLogic(cButton)}>{cButton}</button>
        </div>
    )
}

export default TransferFile