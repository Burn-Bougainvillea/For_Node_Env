import copy from "./assets/copy.svg"

export const icons = {
    copy
} as const;
export type IconName = keyof typeof icons;