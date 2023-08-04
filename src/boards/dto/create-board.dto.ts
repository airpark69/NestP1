import { IsEmpty, IsNotEmpty } from "class-validator";

export class CreateBoardDto {
    @IsNotEmpty()
    public title: string;

    @IsNotEmpty()
    public description: string;
}