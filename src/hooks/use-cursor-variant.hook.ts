import {useState} from "react";
import {CursorTypeEnum} from "../enums/cursor-type.enum";

export interface ChangeCursorVariantProps {
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export const useCursorVariant = () => {
    const [cursorVariant, setCursorVariant] = useState<CursorTypeEnum>(CursorTypeEnum.default);

    const onMouseEnter = () => setCursorVariant(CursorTypeEnum.action);
    const onMouseLeave = () => setCursorVariant(CursorTypeEnum.default);

    return {
        cursorVariant,
        onMouseEnter,
        onMouseLeave
    };
};