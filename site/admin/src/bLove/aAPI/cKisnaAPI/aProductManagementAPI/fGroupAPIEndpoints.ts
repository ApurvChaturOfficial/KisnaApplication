import apiConnection from "@/aConnection/cAPIConnection";


const groupAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({
    
    groupListAPI: builder.query({
      query: () => ({
        url: `group/list/`,
        method: "GET"
      }),
      providesTags: ["groupList"]
    }),

    groupCreateAPI: builder.mutation({
      query: (data) => ({
        url: `group/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["groupList"]
    }),

    groupRetrievePI: builder.query({
      query: (data) => ({
        url: `group/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: any) => [{ type: "groupRetrieve", id: data.params._id }],
    }),

    groupUpdateAPI: builder.mutation({
      query: (data) => ({
        url: `group/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any, _error: any, data: any) => [
        { type: "groupList" },
        { type: "groupRetrieve", id: data.params._id },
      ],
    }),

    groupDeleteAPI: builder.mutation({
      query: (data) => (
        console.log("first"), {
        url: `group/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: any) => [
        { type: "groupList" },
        { type: "groupRetrieve", id: data.params._id },
      ],
    }),

  })
})

export default groupAPIEndpoint;
