import {useContext} from "react";

import {CursorVariantContext} from "./cursor-variant.context";

export const useCursorVariant = () => useContext(CursorVariantContext);
