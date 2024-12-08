import apiConnection from "@/aConnection/cAPIConnection";


const tagAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({
    
    tagListAPI: builder.query({
      query: () => ({
        url: `tag/list/`,
        method: "GET"
      }),
      providesTags: ["tagList"]
    }),

    tagCreateAPI: builder.mutation({
      query: (data) => ({
        url: `tag/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["tagList"]
    }),

    tagRetrievePI: builder.query({
      query: (data) => ({
        url: `tag/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: any) => [{ type: "tagRetrieve", id: data.params._id }],
    }),

    tagUpdateAPI: builder.mutation({
      query: (data) => ({
        url: `tag/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any, _error: any, data: any) => [
        { type: "tagList" },
        { type: "tagRetrieve", id: data.params._id },
      ],
    }),

    tagDeleteAPI: builder.mutation({
      query: (data) => (
        console.log("first"), {
        url: `tag/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: any) => [
        { type: "tagList" },
        { type: "tagRetrieve", id: data.params._id },
      ],
    }),

  })
})

export default tagAPIEndpoint;
