import {FC, PropsWithChildren, useState} from "react";
import {CursorTypeEnum} from "../../enums/cursor-type.enum";
import {CursorVariantContext} from "./cursor-variant.context";

export const CursorVariantProvider: FC<PropsWithChildren> = ({children}) => {
    const [cursorVariant, setCursorVariant] = useState<CursorTypeEnum>(CursorTypeEnum.default);

    const onMouseEnter = () => setCursorVariant(CursorTypeEnum.action);
    const onMouseLeave = () => setCursorVariant(CursorTypeEnum.default);

    return (
        <CursorVariantContext.Provider
            value={{cursorVariant, onMouseEnter, onMouseLeave}}>
            {children}
        </CursorVariantContext.Provider>
    );
};
