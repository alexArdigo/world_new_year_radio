import {PictureList, PixabayHit, QueryBuilderProps, UnsplashResult} from "@/app/types/ContextType";

export const buildQueryParams = (params: QueryBuilderProps) => {
    return (Object.keys(params) as Array<keyof QueryBuilderProps>)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key] as string)}`)
        .join('&');
};

export function getImageUrl(picture: UnsplashResult | PixabayHit): string {
    if ('urls' in picture) {
        return picture.urls.raw; // Unsplash
    }
    return picture.largeImageURL; // Pixabay
}

export const randomPicture = (list: PictureList) => {

    return list[Math.floor(Math.random() * list.length)];
}