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

export {useAuthentication};