import {createContext} from "react";

import {CursorTypeEnum} from "../../enums/cursor-type.enum";

interface CursorVariantContextValues {
    cursorVariant: CursorTypeEnum;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export const CursorVariantContext = createContext<CursorVariantContextValues>({
    cursorVariant: CursorTypeEnum.default
});
