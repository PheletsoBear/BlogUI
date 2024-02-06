import { Category } from "../../Categories/models/category.model";

export interface BlogPost{
   id: string;
    title: string;
    shortDesc: string;
    content: string;
    featuredImgUrl: string;
   urlHandle: string;
   author: string;
    publishDate: Date;
    isVisible: boolean;
    categories: Category[] //This comes from the Category Model and this represents Entity relation 
}