export const useEnv = () => {
    return{
        apiDomain: import.meta.env.VITE_API_DOMAIN
    }
};
