import apiConnection from "@/aConnection/cAPIConnection";


const categoryAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({
    
    categoryListAPI: builder.query({
      query: () => ({
        url: `category/list/`,
        method: "GET"
      }),
      providesTags: ["categoryList"]
    }),

    categoryCreateAPI: builder.mutation({
      query: (data) => ({
        url: `category/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["categoryList"]
    }),

    categoryRetrievePI: builder.query({
      query: (data) => ({
        url: `category/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: any) => [{ type: "categoryRetrieve", id: data.params._id }],
    }),

    categoryUpdateAPI: builder.mutation({
      query: (data) => ({
        url: `category/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any, _error: any, data: any) => [
        { type: "categoryList" },
        { type: "categoryRetrieve", id: data.params._id },
      ],
    }),

    categoryDeleteAPI: builder.mutation({
      query: (data) => (
        console.log("first"), {
        url: `category/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: any) => [
        { type: "categoryList" },
        { type: "categoryRetrieve", id: data.params._id },
      ],
    }),

  })
})

export default categoryAPIEndpoint;
