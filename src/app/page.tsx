import {EventCard} from "@/widgets/EventCard";
import {Header} from "@/widgets/Header";
import {AlertIcon} from "@shared/assets";
import React from 'react';

export default function Main() {
    return (
        <>
            <Header />
            <main className={'container px-6 flex flex-col gap-9 mx-auto'}>
                <div className={"flex flex-col text-center"}>
                    <h1 className={"uppercase text-black text-[40px]"}>
                        новые мероприятия
                    </h1>
                    <p className={"text-[20px] text-black"}>
                        новинки на этой неделе
                    </p>
                </div>
                <div className={"py-16 relative flex flex-col"}>
                    <div
                        className={"bg-no-repeat bg-cover -z-10 left-[50%] right-[50%] top-0 bg-main w-screen absolute mx-[-50vw] h-full"}></div>
                    <div className={"flex scrollbar overflow-x-scroll flex-row gap-8 flex-nowrap"}>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                        <EventCard/>
                    </div>
                </div>
            </main>
        </>
    );
};