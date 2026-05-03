import s from './App.module.css'
import {Header} from "@/common/components/Header/Header.tsx";
import {Routing} from "@/common/routing";
import {Footer} from "@/common/components/Footer/Footer.tsx";
import {useAppSelector} from "@/common/hooks";
import {selectTheme} from "@/app/model/appSlice.ts";
import {ToastContainer} from "react-toastify";
import {SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export const App = () => {

const theme= useAppSelector(selectTheme);

const isDark = theme === "dark";

    return (
        <SkeletonTheme baseColor={isDark? '#141c2c': '#555555'}>
            <div className={`${s[theme]} ${s.appContainer}`}>
                <Header className={theme}/>
                <div className={s.mainContainer}>
                    <Routing/>
                </div>
                <Footer className={theme}/>
                <ToastContainer />
            </div>
        </SkeletonTheme>


    )
}


