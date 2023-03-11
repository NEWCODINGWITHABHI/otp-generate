
import { useEffect, useState ,useRef} from 'react';
import './App.css';
function App() {
  const [sec,setSec]=useState(5);
  const [sendOtp,setSendOtp]=useState(false);
  let timerId;
  let timeOutId;
  const countRef=useRef(5);
  const otpTextRef=useRef(null);

function generateOtp(){
  console.log(otpTextRef);
    let allChar=[0,1,2,3,4,5,6,7,8,9];
    let genOtp=[];
    for(let i=0;i<4;i++){
      genOtp.push(allChar[Math.floor(Math.random()*9)]);
    }
 
  otpTextRef.current.childNodes.forEach((element,i) => {
    element.innerHTML=genOtp[i];
  });
}
  function timer(){
    console.log("HII")
    if(countRef.current>0){

      countRef.current=countRef.current-1;
      setSec(countRef.current);
    }
    else{
      clearInterval(timerId);
      clearTimeout(timeOutId);

    }

  }

  useEffect(()=>{
   if(sendOtp ){
     timerId=setInterval(timer,1000);
   timeOutId=setTimeout(generateOtp,5000);
  }

  },[sendOtp])

  function senOtpHandle(){
    setSendOtp(true);
  }
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>OTP GENERATE</h1>
      <div className='otp-container'>
      <div className="otp-text" ref={otpTextRef}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

      </div>
      <div style={{display:sendOtp?"block":"none"}}>
        <span>Please wait for {sec} seconds</span>
        <div>
          <span>00 :</span>
          <span>{sec<10?"0"+sec:sec}</span>
        </div>
      </div>
      <button onClick={()=>senOtpHandle()}>OTP</button>
      </div>
    </div>
  );
}

export default App;
