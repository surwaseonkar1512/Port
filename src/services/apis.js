const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

export const contactusEndpoint = {
    CONTACT_US_API: BASE_URL + "/reach/contact",
}

export const projectEndpoint = {
   ADDPROJECT_API: BASE_URL + "/projects/addproject",
   GETALL_PROJECT_API: BASE_URL + "/projects/getAllProjects",
}
