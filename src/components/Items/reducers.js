import {
    ITEMS_REQUEST_PRODUCT_LIST,
    ITEMS_RECEIVE_PRODUCT_LIST,
    ITEMS_ADD_TO_BOX,
    ITEMS_REMOVE_FROM_BOX
 } from './actions'; 

const defaultState = {
    productList: [
        {
            image: 'https://cdn.shopify.com/s/files/1/0558/2845/products/Prima_R_R_1500x_e57c9d18-56db-4e1f-8c29-c47dcd4ffc06.jpg?v=1595457079',
			price: 1000,
			discountPrice: 800,
            quantity: 9,
            selectedQuantity: 2,
            title: 'Product 2',
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/0558/2845/products/HONEY_LAPCOS_FACE_MASK_ON_BOXFOX_400x400.jpg?v=1584646872',
            price: 5000,
            discountPrice: 4000,
            quantity: 6,
            selectedQuantity: 1,
            title: 'Product 3'
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/0558/2845/products/7A1A0884_Cropped_400x400.jpg?v=1531094633',
            price: 4000,
            discountPrice: 2500,
            quantity: 11,
            selectedQuantity: 7,
            title: 'Product 4'
        },
        {
            image: 'https://cdn.shopify.com/s/files/1/0558/2845/products/49216187_072_b_400x400.jpeg?v=1556667066',
            price: 2000,
            discountPrice: 1500,
            quantity: 1,
            selectedQuantity: 0,
            title: 'Product 5'
        },
    ],
    selectedProductsList: [],
    dataIsFetching: false,
}

const items = (state = defaultState, action) => {
    switch (action.type) {
        case ITEMS_REQUEST_PRODUCT_LIST:
            return {
                ...state,
                dataIsFetching: action.dataIsFetching
            }
        case ITEMS_RECEIVE_PRODUCT_LIST:
            return {
                ...state,
                dataIsFetching: action.dataIsFetching,
                productList: defaultState.productList// action.productList
            }
        case ITEMS_ADD_TO_BOX:
            return {
                ...state,
                selectedProductsList: [...state.selectedProductsList, action.product]
            }
        case ITEMS_REMOVE_FROM_BOX:
            return {
                ...state,
                selectedProductsList: [...state.selectedProductsList, action.product]
            }
        default:
            return state
    }
}

export default items;