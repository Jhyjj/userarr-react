import React, {useEffect} from 'react';
import './UserStyle.css';

//user component 만들기
const User = ({user,onDelete,onToggle})=>{
    useEffect(()=>{
        console.log('컴포넌트가 화면에 나타남');
        return ()=>{
            console.log('컴포넌트가 화면에서 사라짐');
        }
    },[])
    return (
        <div>
            {/* &&연산자는 둘 중 하나만 false면 false를 반환  --> {user.active && "active"}*/}
            <span className={user.active ? 'active': ""} onClick={()=>{onToggle(user.id)}}>
             유저네임: {user.username}
             이메일:{user.email}
            </span>
            <button onClick={()=>{
                onDelete(user.id);
            }}>삭제</button>
        </div>
    )
}

const UserList = ({users, onDelete, onToggle}) => {

return (
        <div>
            {users.map(user=>(<User user={user} key={user.id} onDelete={onDelete} onToggle={onToggle}/>))}    
        </div>
    );
};

export default UserList;