import React from 'react'
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import {Img, Text } from "components";
export default function AppBar() {
    const { collapseSidebar, collapsed } = useProSidebar();

    const sideBarMenu = [
        {
            icon: (
                <Img
                    className="h-4 w-4"
                    src="images/img_user.svg"
                    alt="user"
                />
            ),
            label: "Dashboard",
        },
        {
            icon: (
                <Img
                    className="h-4 w-4"
                    src="images/img_iconfromtablerio_gray_600.svg"
                    alt="iconfromtableri"
                />
            ),
            label: "Customers",
        },
        {
            icon: (
                <Img
                    className="h-4 w-4"
                    src="images/img_iconfromtablerio_gray_600_16x16.svg"
                    alt="iconfromtableri_One"
                />
            ),
            label: "All reports",
        },
        {
            icon: (
                <Img
                    className="h-4 w-4"
                    src="images/img_iconfromtablerio_16x16.svg"
                    alt="iconfromtableri_Two"
                />
            ),
            label: "Geography",
        },
        {
            icon: (
                <Img className="h-4 w-4" src="images/img_qrcode.svg" alt="qrcode" />
            ),
            label: "Conversations",
        },
        {
            icon: (
                <Img
                    className="h-4 w-4"
                    src="images/img_iconfromtablerio.svg"
                    alt="iconfromtableri_Three"
                />
            ),
            label: "Deals",
        },
        {
            icon: (
                <Img className="h-4 w-4" src="images/img_settings.svg" alt="settings" />
            ),
            label: "Export",
        },
    ];
    return (
        <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[180px] flex h-screen md:hidden justify-start overflow-auto top-[0]"
        >
            <Menu
                menuItemStyles={{
                    button: {
                        padding: "8px",
                        gap: "12px",
                        color: "#131313",
                        fontSize: "14px",
                        borderColor: "transparent",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderRadius: "20px",
                        [`&:hover, &.ps-active`]: {
                            color: "#7d7d7d",
                            fontWeight: "400 !important",
                            borderColor: "#f1f1f1ff",
                            backgroundColor: "#ffffffff !important",
                        },
                    },
                }}
                className="flex flex-col items-center justify-start mb-[35px] pt-[11px]w-[86%]"
            >
                {!collapsed && <div className="relative flex flex-col gap-2 h-max items-center justify-center">
                    <MenuItem>
                        <Img
                            className="h-[70%] w-[70%]"
                            src="images/img_logo.svg"
                            alt="logo"
                        />
                    </MenuItem>
                </div>}
                <div className="sm:h-[393px] md:h-[400px] h-[330px] relative w-full">
                    <div className="relative bottom-[0] flex flex-col gap-2 justify-start">
                        <MenuItem
                            icon={
                                <Img
                                    className="h-4 w-4"
                                    src="images/img_rewind.svg"
                                    alt="iconfromtableri"
                                />
                            }
                        >
                            <Text className="my-[3px] tracking-[-0.25px] md:w-[100] sm:w-0">
                                Search
                            </Text>
                        </MenuItem>
                        {sideBarMenu?.map((menu, i) => (
                            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                                {menu.label}
                                {menu.label === "Customers" && <Img
                                    className="h-5 w-5 mx-5"
                                    src="images/img_arrowdown.svg"
                                    alt="arrowdown"
                                />}
                            </MenuItem>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-end mt-3 relative top-[30px] w-full">
                    <MenuItem
                        icon={
                            <Img
                                className="h-10 w-10"
                                src="images/img_rectangle1.png"
                                alt="user_One"
                            />
                        }
                    >
                        <div className="flex flex-1 md:flex-1 flex-col gap-1 items-left w-auto md:w-full">
                            <Text
                                className="text-gray-900 text-sm tracking-[-0.25px] w-auto"
                                size="txtInterMedium14"
                            >
                                Gustavo Xavier
                            </Text>
                            <Text
                                className="bg-orange-200 justify-center px-1.5 rounded-lg text-[10px] text-gray-900 tracking-[-0.50px] w-[40px]"
                                size="txtInterRegular10"
                            >
                                Admin
                            </Text>
                        </div>
                    </MenuItem>
                    <MenuItem
                        icon={
                            <Img
                                className="h-4 w-4"
                                src="images/img_user_gray_600.svg"
                                alt="user_One"
                            />
                        }
                    >
                        <Text className="flex-1 my-[3px] tracking-[-0.25px] w-auto">
                            Settings
                        </Text>
                    </MenuItem>
                    <MenuItem
                        icon={
                            <Img
                                className="h-4 w-4"
                                src="images/img_television.svg"
                                alt="television"
                            />
                        }
                    >
                        <Text className="flex-1 my-[3px] text-red-900 tracking-[-0.25px] w-auto">
                            Log out
                        </Text>
                    </MenuItem>
                </div>
            </Menu>
        </Sidebar>
    )
}
