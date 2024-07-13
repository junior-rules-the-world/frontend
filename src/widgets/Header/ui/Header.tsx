import {AlertIcon} from "@shared/assets";
import React from 'react';

export const Header = () => {
    return (
        <header className={"container mx-auto px-6 py-10 flex flex-row justify-between items-center"}>
            <div className={""}>
                <p className={"text-[50px] text-black lowercase"}>
                    eventia.
                </p>
            </div>
            <div>
                <ul className={"flex flex-row gap-[55px] text-[15px] text-black"}>
                    <li className={"cursor-pointer"}>
                        главная
                    </li>
                    <li className={"cursor-pointer"}>
                        мероприятия
                    </li>
                    <li className={"cursor-pointer"}>
                        задачи
                    </li>
                </ul>
            </div>
            <div className={"flex flex-row items-center gap-[33px]"}>
                <AlertIcon className={'cursor-pointer'}/>
                <div className={"bg-gray-400 cursor-pointer w-[65px] h-[65px] rounded-full"}></div>
            </div>
        </header>
    );
};