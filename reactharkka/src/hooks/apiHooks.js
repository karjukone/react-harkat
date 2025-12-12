import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import {useEffect, useState} from 'react';
import {fetchData} from '../utils/fetchData.js';

const MEDIA_API = import.meta.env.VITE_MEDIA_API;
const AUTH_API = import.meta.env.VITE_AUTH_API + 'users/';

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

  const postMedia = async (fileData, inputs, token) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },

      body: JSON.stringify({...inputs, ...fileData}),
    };

    const mediaResponse = await fetchData(MEDIA_API, fetchOptions);

    return mediaResponse;
  };


const useFile = () => {
  const postFile = async (file, token) => {

    const formData = new FormData();
    formData.append('file', file);

    console.log('data.', formData);
    const options = {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    };

    const uploadResponse = await fetchData(`${UPLOAD_API}/upload`, options);


    return uploadResponse;
  };

  return {postFile};
};



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

const useUser = () => {
  const getUserByToken = async (token) => {
    const options = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };

    const tokenResult = fetchData(`${AUTH_API}/token`, options);
    return tokenResult;
  };

  const postUser = async (user) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    const registrationResult = await fetchData(`${AUTH_API}`, options);
    
    return registrationResult;
  };

  return {getUserByToken, postUser};
};

export {useAuthentication, useMedia, useUser, useFile, postMedia};