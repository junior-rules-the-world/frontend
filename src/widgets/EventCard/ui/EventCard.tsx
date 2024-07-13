import React from 'react';

export const EventCard = () => {
    return (
        <div
            className={"py-[14px] relative flex flex-col mb-[56px] min-w-[480px] px-[16px] gap-[19px] bg-[#C8B6FF] rounded-[48px]"}>
            <div className={"bg-flag flex py-[17px] top-0 right-[62px] justify-center absolute w-[111px] h-[77px]"}>
                <p className={"text-center text-[15px] uppercase"}>дата</p>
            </div>

            <div className={"w-full bg-[#BABABA] h-[212px] border-[5px] rounded-[48px] border-black "}>

            </div>
            <div className={"flex flex-row pl-3 pr-[22px]"}>
                <div className={"flex-[1.5]"}>
                    <h2 className={"uppercase text-wrap text-[30px]"}>Название</h2>
                    <p className={"uppercase break-all text-[20px]"}>ОПИСАНИЕОИСАНИЕОПИСАНИЕОПИСАНИЕ</p>
                </div>
                <div className={"flex-1 flex items-end justify-end"}>
                    <div
                        className={"bg-[#BABABA] w-[103px] h-[103px] rounded-full border-[5px] border-black"}>

                    </div>
                </div>
            </div>
        </div>
    );
};