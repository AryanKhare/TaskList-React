import { Icon } from "./Icon.model";

export interface IconProps {
    data: Icon[];
    selectedIcon: Icon | null,
    setSelectedIcon: (val: Icon) => void;
}