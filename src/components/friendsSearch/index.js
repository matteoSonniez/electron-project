import React from 'react';
import useFetch from '../../hook/useFetch';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const Index = ({users}) => {
    const [thecookie, setCookie] = useState(Cookies.get('token_cookie'));
    const [userId, setUserId] = useState();
    const { data, isLoading, error, fetchData } = useFetch('user/friends/add',{'authorization': thecookie}, {"userId":userId}, 'PUT');

    const addFriend = (event, params) => {
        event.preventDefault();
        setUserId(params._id)
    };

    useEffect(() => {
        if(userId != undefined){
            fetchData();
        }
      }, [userId]);
    return (
        <div>
            {users.map((user) => (
                <div>
                    <p>{user.userName}</p>
                    <button onClick={event => addFriend(event, user)}>suivre</button> 
                </div> 
            ))}
        </div>
    );
}

export default Index;
