import { StringifyOptions } from "querystring";

export class Rating {
    description: String;
    sitterId: String; 
}

export class BabyRating extends Rating{
    sitterid: String
}

export class SitterRating extends Rating{
    parentId: String
}