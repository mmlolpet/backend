import { Document } from "mongoose";

export interface IPet
{
    uid: number;
    nickname: string;
    health: number;
    happiness: number;
    hunger: number;
    thirst: number;
    energy: number;
    age: number;
}

export interface IPetMethods extends IPet
{
    pat: () => void;
    feed: () => void;
    sleep: () => void;
    play: () => void;
    die: () => void;
}