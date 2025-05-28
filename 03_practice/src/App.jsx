import { useState } from 'react';
import Mmethod from './components/Mmethod';
import LgOperator from './components/LgOperator';
// import PropData from './components/propdata';
import ChildProp from './ChildProp';
import PropData from './components/PropData';

const App = () => {
  // ✅ State for new text values and company list
  const [textToShow, setTextToShow] = useState([]);
  // const [detailsData, setDetailsData] = useState([
  //   { dataRecord: 'Xiaomi', Products: 'Car Mobile Bike', isBought: false },
  //   { dataRecord: 'Kawasaki', Products: 'Bike', isBought: false },
  //   { dataRecord: 'Honda', Products: 'Car Bike', isBought: false },
  //   { dataRecord: 'Suzuki', Products: 'Car Pick-up Bike', isBought: false }
  // ]);
  const [detailsData, setDetailsData] = useState([
    // { dataRecord: 'Xiaomi', Products: 'Car Mobile Bike', isBought: false },
    // { dataRecord: 'Kawasaki', Products: 'Bike', isBought: false },
    // { dataRecord: 'Honda', Products: 'Car Bike', isBought: false },
    // { dataRecord: 'Suzuki', Products: 'Car Pick-up Bike', isBought: false }
  ]);

  // ✅ Buy button handler: mark item as bought
  const handleBuy = (recordToUpdate) => {
    console.log(`${recordToUpdate.dataRecord} Buy clicked`);

    const updatedData = detailsData.map((item) =>
      item === recordToUpdate ? { ...item, isBought: true } : item
    );

    setDetailsData(updatedData);
  };

  // ✅ Input Enter key handler: add new item
  const HandleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const newProduct = event.target.value.trim();
      if (newProduct !== '') {
        const newEntry = {
          dataRecord: newProduct,
          Products: 'Custom Product',
          isBought: false
        };
        setTextToShow([...textToShow, newProduct]);
        setDetailsData([...detailsData, newEntry]);
        event.target.value = '';
        console.log(`New entry added: ${newProduct}`);
      }
    }
  };

  return (
    <>
      <ChildProp>
        <Mmethod />
      </ChildProp>

      <hr />

      <LgOperator
        handleBuybtnOnCLick={handleBuy}
        HandleOnKeyDown={HandleKeyDown}
        textHighlight={textToShow}
        fullData={detailsData}
      />

      <hr />

      <ChildProp>
        <PropData />
      </ChildProp>
    </>
  );
};

export default App;