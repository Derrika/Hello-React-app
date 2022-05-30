import React, {useState, useEffect} from 'react';

import axios from 'axios';

//Made changes to original user info on the server
export const withEditableUser = (Component, userId) => {
    return props => {
        //represent Data on the server for backup after changes made on client server
        const [originalUser, setOriginalUser] = useState(null);
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get(`./users/${userId}`);
                setOriginalUser(response.data);
                setUser(response.data);
            })();
        }, []);

        const onChangeUser = changes => {
            setUser({ ...user, ...changes });
        }

        //Save the new data from client
        const onSaveUser = async () => {
            const response = await axios.post(`/users/${userId}`, { user});
            setOriginalUser(response.data);
            setUser(response.data);
        }

        //Reset user state to it's original form
        const onResetUser = () => {
            setUser(originalUser);
        }

        return <Component 
                {...props} 
                user={user} 
                onChangeUser={onChangeUser}
                onSaveUser={onSaveUser}
                onResetUser={onResetUser}

                />
    }
}