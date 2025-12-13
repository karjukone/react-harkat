import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import {useEffect, useState} from 'react';
import {fetchData} from '../utils/fetchData.js';
import { useUserContext } from './contextHook.js';

const MEDIA_API = import.meta.env.VITE_MEDIA_API;
const AUTH_API = import.meta.env.VITE_AUTH_API + 'users/';
const UPLOAD_API = import.meta.env.VITE_UPLOAD

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

  
  const modifyMedia = async (inputs, id, token) => {
    const fetchOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },

      body: JSON.stringify({...inputs}),
    };

    const modifyResponse = await fetchData(`${MEDIA_API}/${id}`, fetchOptions);

    return modifyResponse;
  };

  const deleteMedia = async (id, token) => {
    const fetchOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };

    const deleteResponse = await fetchData(`${MEDIA_API}/${id}`, fetchOptions);

    return deleteResponse;
  };




  return {mediaArray, postMedia, modifyMedia, deleteMedia};
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

const useLike = () => {
  const { user } = useUserContext();

  const postLike = async (mediaId) => {
    return await fetchData(
      `${MEDIA_API}likes`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ media_id: mediaId }),
      }
    );
  };

  const deleteLike = async (likeId) => {
    return await fetchData(
      `${MEDIA_API}likes/${likeId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
  };

  const getLikeCountByMediaId = async (mediaId) => {
    return await fetchData(`${MEDIA_API}likes/count/${mediaId}`);
  };

  const getLikeByUser = async (mediaId) => {
    return await fetchData(`${MEDIA_API}likes/bymedia/user/${mediaId}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
  };

  return {
    postLike,
    deleteLike,
    getLikeCountByMediaId,
    getLikeByUser,
  };
};


export {useAuthentication, useMedia, useUser, useFile, useLike};