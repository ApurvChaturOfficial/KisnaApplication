import apiConnection from "@/aConnection/cAPIConnection";


const menuAPIEndpoint = apiConnection.injectEndpoints({
  endpoints: (builder) => ({
    
    MenuListAPI: builder.query({
      query: () => ({
        url: `menu/list/`,
        method: "GET"
      }),
      providesTags: ["MenuList"]
    }),

    MenuCreateAPI: builder.mutation({
      query: (data) => ({
        url: `menu/create/`,
        method: "POST",
        body: data.body
      }),
      invalidatesTags: ["MenuList"]
    }),

    MenuRetrievePI: builder.query({
      query: (data) => ({
        url: `menu/retrieve/${data.params._id}`,
        method: "GET",
      })
    }),

    MenuUpdateAPI: builder.mutation({
      query: (data) => ({
        url: `menu/update/${data.params._id}`,
        method: "PUT",
        body: data.body
      }),
      invalidatesTags: ["MenuList"]
    }),

    MenuDeleteAPI: builder.mutation({
      query: (data) => ({
        url: `menu/delete/${data.params._id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["MenuList"]
    }),

  })
})

export default menuAPIEndpoint;
