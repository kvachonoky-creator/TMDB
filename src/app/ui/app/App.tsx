import s from './App.module.css'
import {Header} from "@/common/components/Header/Header.tsx";
import {Routing} from "@/common/routing";
import {Footer} from "@/common/components/Footer/Footer.tsx";
import {useAppSelector} from "@/common/hooks";
import {selectTheme} from "@/app/model/appSlice.ts";
import {ToastContainer} from "react-toastify";

export const App = () => {

const theme= useAppSelector(selectTheme);

    return (
        <div className={`${s[theme]} ${s.appContainer}`}>
            <Header className={theme}/>
            <div className={s.mainContainer}>
                <Routing/>
            </div>
            <Footer className={theme}/>
            <ToastContainer />
        </div>

    )
}


