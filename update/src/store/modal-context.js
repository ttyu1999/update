import React from "react";


export const ModalContext = React.createContext({
    removeAnimation: false,
    setRemoveAnimation: () => {},
});