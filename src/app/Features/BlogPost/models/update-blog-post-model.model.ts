export interface UpdateBlogPost{
    Title: string;
    ShortDesc: string;
    Content: string;
    FeaturedImgUrl: string;
    UrlHandle: string;
    PublishDate: Date;
    Author: string;
    IsVisible: boolean;
    categories: string[];
}