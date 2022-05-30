import React, {useState, useEffect} from 'react';

import axios from 'axios';

export const withEditableUser = (Component, userId) => {
    return props => {
        //represent Data on the server for backup after changes made on client server
        const [originalUser, setOriginalUser] = useState(null);
        const [user, setUser] = useState(null);
    }
}