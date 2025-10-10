export const useEnv = () => {
  const apiDomainBase = import.meta.env.VITE_API_DOMAIN;

  return {
    apiDomain: `${apiDomainBase}`,
    apiDomainAuth: `${apiDomainBase}/api/auth`,
    apiDomainPlan: `${apiDomainBase}/api/plan`,
    apiDomainCourse: `${apiDomainBase}/api/course`,
    apiDomainTeacher: `${apiDomainBase}/api/teacher`,
    apiDomainStudent: `${apiDomainBase}/api/student`,
  };
};
