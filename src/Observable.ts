import { Observer } from "./Observer";

export interface Observable{
    addObserver(observer: Observer): void;

    remove(observer: Observer): void;

    notifyall(descripcion: string): void;
}