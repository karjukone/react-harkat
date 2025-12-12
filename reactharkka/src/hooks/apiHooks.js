import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import {useEffect, useState} from 'react';
import {fetchData} from '../utils/fetchData.js';

const MEDIA_API = import.meta.env.VITE_MEDIA_API;
const AUTH_API = import.meta.env.VITE_AUTH_API + '/users/';

function useMedia() {
    const [mediaArray, setMediaArray] = useState([]);
    useEffect(() => {
        const getMedia = async () => {
        try {
            const mediaData = await fetchData(MEDIA_API + '/media');
            console.log(mediaData);

            const newArray = await Promise.all(
            mediaData.map(async (item) => {
                const user = await fetchData(AUTH_API + item.user_id);
                console.log(user);
                return {...item, username: user.username};
                
            })
            );

            setMediaArray(newArray);
        } catch (e) {
            console.log('Error:', e);
        }
        };

        getMedia();
    }, []);
    return {mediaArray};
}



function useAuthentication() {
    const postLogin = async (inputs) => {
        try {
        const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
        };

        const loginResult = await fetchData(
        import.meta.env.VITE_AUTH_API + '/auth/login',
        fetchOptions,
        );
        return loginResult;

        } catch(e) {
            console.log(e);
        }

    };

  return {postLogin};
};

export {useAuthentication, useMedia};