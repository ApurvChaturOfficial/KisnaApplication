import apiConnection from "@/aConnection/cAPIConnection";


const productAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({
    
    productListAPI: builder.query({
      query: () => ({
        url: `product/list/`,
        method: "GET"
      }),
      providesTags: ["productList"]
    }),

    productCreateAPI: builder.mutation({
      query: (data) => ({
        url: `product/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["productList"]
    }),

    productRetrievePI: builder.query({
      query: (data) => ({
        url: `product/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: any) => [{ type: "productRetrieve", id: data.params._id }],
    }),

    productUpdateAPI: builder.mutation({
      query: (data) => ({
        url: `product/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any, _error: any, data: any) => [
        { type: "productList" },
        { type: "productRetrieve", id: data.params._id },
      ],
    }),

    productDeleteAPI: builder.mutation({
      query: (data) => (
        console.log("first"), {
        url: `product/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: any) => [
        { type: "productList" },
        { type: "productRetrieve", id: data.params._id },
      ],
    }),

  })
})

export default productAPIEndpoint;
