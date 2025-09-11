export const useEnv = () => {
    return{
        apiDomain: import.meta.env.VITE_API_DOMAIN,
        apiDomainPlan: import.meta.env.VITE_API_DOMAIN_PLAN
    }
};
