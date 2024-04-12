import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, SlideDirection } from "@chakra-ui/react"
import React from "react"

interface IProps {
    children: React.ReactNode,
    isOpen: boolean,
    overlay?: boolean,
    placement?: SlideDirection,
    onClose: () => void,
}

const DrawerUi = ({ children, isOpen, onClose, placement = 'right', overlay = false }: IProps) => {

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement={placement}
                onClose={onClose}
                // size={}
                variant={'alwaysOpen'}
            >
                {overlay && <DrawerOverlay />}
                <DrawerContent>
                    <DrawerBody>
                        {children}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DrawerUi