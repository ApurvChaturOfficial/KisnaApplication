import apiConnection from "@/aConnection/cAPIConnection";


const roleAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({
    
    RoleListAPI: builder.query({
      query: () => ({
        url: `role/list/`,
        method: "GET"
      }),
      providesTags: ["RoleList"]
    }),

    RoleCreateAPI: builder.mutation({
      query: (data) => ({
        url: `role/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["RoleList"]
    }),

    RoleRetrievePI: builder.query({
      query: (data) => ({
        url: `role/retrieve/${data.params._id}`,
        method: "GET",
      })
    }),

    RoleUpdateAPI: builder.mutation({
      query: (data) => ({
        url: `role/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: ["RoleList"]
    }),

    RoleDeleteAPI: builder.mutation({
      query: (data) => ({
        url: `role/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["RoleList"]
    }),

  })
})

export default roleAPIEndpoint;
