import { PeugeotModel } from "./card";

export default function SortPriceD(models: PeugeotModel[]): PeugeotModel[] {
    return [...models].sort((a, b) => a.Price - b.Price);
}
