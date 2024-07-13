import {GithubIcon, GoogleIcon, VKIcon} from "@shared/assets";
import React from "react";


export default function Login() {
  return (
      <div className={"bg-login h-full bg-no-repeat bg-cover"}>
        <main className="container h-full px-4 flex flex-row mx-auto">
            <div className={"flex flex-1 justify-center items-center"}>
                <h1 className={"lowercase text-[128px] text-white"}>Eventia.</h1>
            </div>
            <div className={"flex flex-1 justify-center items-center"}>
                <div className={"flex flex-col w-[480px] rounded-2xl gap-6 px-8 py-14 bg-white "}>
                    <div className={"flex flex-row"}>
                        <button className={"flex-1 px-10 py-6 rounded-md"}>
                            Вход
                        </button>
                        <button className={"flex-1 px-10 py-6 rounded-md text-white bg-[#9A4F97]"}>
                            Регистрация
                        </button>
                    </div>
                    <div className={"flex space-y-10 flex-col border-t-[1px] border-b-[1px] px-4 py-8 "}>
                        <p className={"text-center text-[20px] font-extrabold"}>
                            Войдите, чтобы продолжить.
                        </p>
                        <input className={"text-[20px] py-1 px-5 rounded-[7px] bg-[#D9D9D9]  font-normal"}
                               placeholder={'username or email'} type={"text"}/>
                        <button className={"rounded-[7px] min-h-10 text-[20px] bg-[#84418A] text-white"}>sign in</button>
                    </div>
                    <div className={"flex flex-col space-y-6"}>
                        <p className={"text-center text-[20px] font-extrabold"}>или продолжить с помощью:</p>
                        <div className={"flex flex-row gap-6 justify-center items-center"}>
                            <GoogleIcon className={'cursor-pointer'}/>
                            <VKIcon className={'cursor-pointer'} />
                            <GithubIcon className={'cursor-pointer'}/>
                        </div>
                    </div>
                    <div className={"flex flex-row justify-around mt-[78px]"}>
                        <p className={"font-semibold text-[16px]"}>инфаинфаинфа</p>
                        <p className={"font-semibold text-[16px]"}>инфаинфаинфа</p>
                    </div>
                </div>
            </div>
        </main>
      </div>
  );
}
