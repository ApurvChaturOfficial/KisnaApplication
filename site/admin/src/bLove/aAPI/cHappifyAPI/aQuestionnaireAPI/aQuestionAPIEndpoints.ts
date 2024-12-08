import apiConnection from "@/aConnection/cAPIConnection";


const questionAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({
    
    questionListAPI: builder.query({
      query: () => ({
        url: `question/list/`,
        method: "GET"
      }),
      providesTags: ["questionList"]
    }),

    questionCreateAPI: builder.mutation({
      query: (data) => ({
        url: `question/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["questionList"]
    }),

    questionRetrievePI: builder.query({
      query: (data) => ({
        url: `question/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: any) => [{ type: "questionRetrieve", id: data.params._id }],
    }),

    questionUpdateAPI: builder.mutation({
      query: (data) => ({
        url: `question/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any, _error: any, data: any) => [
        { type: "questionList" },
        { type: "questionRetrieve", id: data.params._id },
      ],
    }),

    questionDeleteAPI: builder.mutation({
      query: (data) => (
        console.log("first"), {
        url: `question/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: any) => [
        { type: "questionList" },
        { type: "questionRetrieve", id: data.params._id },
      ],
    }),

  })
})

export default questionAPIEndpoint;
