import React ,{useEffect} from 'react';

const Timer = (props) => {
    useEffect(()=>{
        //Mount할때 호출 componentDidMount
        //UnMount 할때 호출 componentWillUnmount
        //Update 할때 호출 componentDidUpdate
        const timer = setInterval(()=>{
            console.log('타이머 돌아가는중....✔');
        },1000)
        //return 속에 있는게 unmount할때 호출되는 함수라고 보면 됨.
        return ()=>{
            clearInterval(timer);
        }
    },[])
    return (
        <div>
            타이머를 실행합니다😎
        </div>
    );
};

export default Timer;