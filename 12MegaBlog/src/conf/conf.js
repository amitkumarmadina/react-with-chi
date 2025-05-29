const conf={

    appwriteUrl:String(import.meta.env.VITE__APPWRITE_URL),
    appwriteProjectId:String(import.meta.env.VITE__APPWRITE_PROJECT_ID),
    appwriteDbId:String(import.meta.env.VITE__APPWRITE_DB_ID),
    appwriteCollectionId:String(import.meta.env.VITE__APPWRITE_COLLECTION_ID),
    appwriteBucketId:String(import.meta.env.VITE__APPWRITE_BUCKET_ID),
}

export default conf