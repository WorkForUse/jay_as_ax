import '../components/Calculator.css';

const Datatransfer = ({ Propdata, calculateButton }) => {
    return (
        <div>
            <button type="button" className="btn btn-dark" onClick={() => calculateButton(Propdata)}>
                {Propdata}
            </button>
        </div>
    );
};

export default Datatransfer;
