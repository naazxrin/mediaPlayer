// define all api for project ,it call commonApi function
import commonAPI from "./commonAPI";
import SERVER_URL from "./serverUrl";

// upload video api :-api must call by add components
export const uploadVideoAPI = async(video)=>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,video)
}

// getAllVideos:- called by view component
export const getAllVideoAPI= async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")
}

// saveHistory API - called by VideoCard
export const saveHistoryAPI = async(videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}
// getHistoryAPI -called by History
export const getHistoryAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

// removedHistoryAPI -called by history
export const removedHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}

// removeVideoAPI-called by videoCard
export const removeVideoAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}

// addCategoryAPI - called by category
export const addCategoryAPI = async(categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)
}

// getAllCategoryAPI - called by category
export const getAllCategoryAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
} 

// removeCategoryAPI -called by category
export const removeCategoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${id}`,{})
}

// getSingleVideoAPI -called by category
export const getSingleVideoAPI=async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
}

// updateCategoryAPI-called by category
export const updateCategoryAPI=async(categoryId,updateCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updateCategoryDetails)
}
// getSingleCategoryAPI -called By View
export const getSingleCategoryAPI=async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/categories/${id}`,"")
}