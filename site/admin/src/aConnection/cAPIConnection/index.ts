import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const apiConnection = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1/",
    credentials: "include"
  }),
  tagTypes: [
    "baseManyToOneList", "baseManyToManyList", "baseList", "baseOneToOneList", "baseOneToManyList", 
    "MenuList", "RoleList", "UserList",
    "ProductList", "CategoryList", "TagList", 
  ],
  endpoints: () => ({})
})

export default apiConnection;
