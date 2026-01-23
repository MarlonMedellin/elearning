export interface CartelItemData {
    time: string;
    title: string;
    description: string;
}

export interface CartelData {
    id: number;
    mainTitle: string;
    image: ImageMetadata;
    borderColor: string;
    items: CartelItemData[];
}
