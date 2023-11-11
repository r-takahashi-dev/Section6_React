import React, {useEffect, useState} from 'react';
import ColorfulMessage from './components/colorfulMessage';

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowlg = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlg || setFaceShowFlg(true);
      } else {
        faceShowFlg && setFaceShowFlg(false);
      }
    }
  
  }, [num]);

  return (
      <>
        <h1 style={{ color: 'red' }}>こんにちは</h1>
        <ColorfulMessage color='blue'>お元気ですか？</ColorfulMessage>
        <ColorfulMessage color='pink'>元気です！</ColorfulMessage>    
        <button onClick={onClickCountUp}>カウントアップ</button>
        <br />
        <button onClick={onClickSwitchShowlg}>on/off</button>
        <p>{num}</p>
        {faceShowFlg && <p>( ﾟДﾟ)</p>}
      </>
  );
};

export default App;