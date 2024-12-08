import apiConnection from "@/aConnection/cAPIConnection";


const productVariantAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({
    
    productVariantListAPI: builder.query({
      query: () => ({
        url: `product-variant/list/`,
        method: "GET"
      }),
      providesTags: ["productVariantList"]
    }),

    productVariantCreateAPI: builder.mutation({
      query: (data) => ({
        url: `product-variant/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["productVariantList"]
    }),

    productVariantRetrievePI: builder.query({
      query: (data) => ({
        url: `product-variant/retrieve/${data.params._id}`,
        method: "GET",
      }),
      providesTags: (_result: any, _error: any, data: any) => [{ type: "productVariantRetrieve", id: data.params._id }],
    }),

    productVariantUpdateAPI: builder.mutation({
      query: (data) => ({
        url: `product-variant/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: (_result: any, _error: any, data: any) => [
        { type: "productVariantList" },
        { type: "productVariantRetrieve", id: data.params._id },
      ],
    }),

    productVariantDeleteAPI: builder.mutation({
      query: (data) => (
        console.log("first"), {
        url: `product-variant/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: (_result: any, _error: any, data: any) => [
        { type: "productVariantList" },
        { type: "productVariantRetrieve", id: data.params._id },
      ],
    }),

  })
})

export default productVariantAPIEndpoint;
