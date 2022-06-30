import React,{useEffect, useState} from 'react';

const App2 = (props) => {
    const [count,setCount] = useState(1);
    const [input,setInput] = useState("");
    useEffect(()=>{
        //componentDidMount && componentDidUpdate
        console.log('렌더링 될 때마다 useEffect호출')
    })
     //useEffect에 두번째 인자로 빈배열을 넘겨주면 mount될때만 호출된다
     //componentDidMount
    useEffect(()=>{
        console.log('처음 마운트 될 때만 useEffect호출')
    },[])

    //useEffect의 두번째 인자에 빈배열이 아닌 값이 있는 배열을 주면, 그 값이 업데이트될때만 호출된다.
    useEffect(()=>{
        console.log('배열요소 안의 값이 업데이트 되면 useEffect 호출')
    },[count])

    const handleCount = ()=>{
        setCount(count+1);
    }

    const onChange = (e)=>{
        setInput(e.target.value);
    }
    return (
        <div>
            <button onClick={handleCount}>수정하기</button>
            <span>count: {count}</span>
            <input onChange={onChange} value={input}/>
        </div>
    );
};

export default App2;