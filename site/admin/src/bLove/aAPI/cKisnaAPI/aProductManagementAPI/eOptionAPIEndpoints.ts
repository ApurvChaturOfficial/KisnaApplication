import apiConnection from "@/aConnection/cAPIConnection";


const optionAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({
    
    optionListAPI: builder.query({
      query: () => ({
        url: `option/list/`,
        method: "GET"
      }),
      providesTags: ["optionList"]
    }),

    optionCreateAPI: builder.mutation({
      query: (data) => ({
        url: `option/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["optionList"]
    }),

    optionRetrievePI: builder.query({
      query: (data) => ({
        url: `option/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: any) => [{ type: "optionRetrieve", id: data.params._id }],
    }),

    optionUpdateAPI: builder.mutation({
      query: (data) => ({
        url: `option/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any, _error: any, data: any) => [
        { type: "optionList" },
        { type: "optionRetrieve", id: data.params._id },
      ],
    }),

    optionDeleteAPI: builder.mutation({
      query: (data) => (
        console.log("first"), {
        url: `option/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: any) => [
        { type: "optionList" },
        { type: "optionRetrieve", id: data.params._id },
      ],
    }),

  })
})

export default optionAPIEndpoint;
