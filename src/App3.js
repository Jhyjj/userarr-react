import React ,{useState} from 'react';
import Timer from './component/Timer';

const App3 = (props) => {
    const [showTimer, setShowTimer] = useState(false);
    return (
        <div>
            {/* showtimer가 true일때만 Timer가 보이게 만듦 */}
            {showTimer && <Timer/>} 
            <button onClick={()=>{setShowTimer(!showTimer)}}>클릭</button>
        </div>
    );
};

export default App3;