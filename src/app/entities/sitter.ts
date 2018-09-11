import { SitterRating } from './rating';

export class Sitter{
    id: String;
    email: String;
    phone: String; 
    birthDate: Date;
    gender: String;
    firstname: String;
    lastname: String;
    education: String;
    picture: String;
    description: String;
    location: String;
    rating: SitterRating[];
    schedule: any; //Switching of ts-typesystem 
}