import './App.css';
import Box from "./component/Box";
import {useState} from "react";

function App() {
    let counter = 0;
    const [counter2, setCounter2] = useState(0);

    const increase = () => {
        counter = counter + 1;
        setCounter2(counter2 + 1);
        console.log('counter: ', counter, 'counter2: ', counter2);
    };

    //1. 유저가 버튼을 클릭한다.
    //2. counter+1해서 1이됨
    //3. setState함수소출
    //4. console.log실행됨
    return (
        <div>
            <div>{counter}</div>
            <div>state: {counter2}</div>
            <button onClick={increase}>클릭!!</button>
            <Box name="리사" num={1}/>
            <Box name={"제니"} num={2}/>
            <Box name={"린타"} num={3}/>
        </div>

    );
}

export default App;
