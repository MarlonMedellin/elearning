export interface CartelItemData {
    time: string;
    title: string;
    description: string;
    isAlert?: boolean;
}

export interface CartelData {
    id: number;
    mainTitle: string;
    image: ImageMetadata;
    borderColor: string;
    items: CartelItemData[];
    showSocialShare?: boolean;
}
