import s from './App.module.css'
import {Header} from "@/common/components/Header/Header.tsx";
import {Routing} from "@/common/routing";
import {Footer} from "@/common/components/Footer/Footer.tsx";
import {useAppSelector} from "@/common/hooks";
import {selectTheme} from "@/app/model/appSlice.ts";

export const App = () => {

const theme = useAppSelector(selectTheme);

    console.log(theme)

    return (
        <div className={s[theme]}>
            <Header className={theme}/>
            <Routing/>
            <Footer className={theme}/>
        </div>

    )
}


