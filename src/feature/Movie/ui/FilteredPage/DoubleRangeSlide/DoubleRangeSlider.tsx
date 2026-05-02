import {type ChangeEvent} from "react";
import s from './DoubleRangeSlider.module.css';

const gap = 0
const step = 0.1

type Props = {
    initMin: number
    initMax: number
    minValue: number
    maxValue: number
    setMinValue: (min: number) => void
    setMaxValue: (max: number) => void
}

export const DoubleRangeSlider = ({initMin, initMax, minValue, maxValue, setMaxValue, setMinValue}: Props) => {

    const handleCommit = () => {
        setMinValue(minValue);
        setMaxValue(maxValue);
    };

    const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(e.target.value), maxValue - gap);
        setMinValue(Number(value.toFixed(1)))
    };

    const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(e.target.value), minValue + gap);
        setMaxValue(Number(value.toFixed(1)))
    };

    const diff = initMax - initMin;
    const minPos = diff > 0 ? ((minValue - initMin) / diff) * 100 : 0;
    const maxPos = diff > 0 ? ((maxValue - initMin) / diff) * 100 : 100;

    return (
        <div className={s.wrapper}>
            <div className={s.slider}>
                <input
                    type="range"
                    min={initMin}
                    max={initMax}
                    step={step}
                    value={minValue}
                    onChange={handleMinChange}
                    onMouseUp={handleCommit}
                    onTouchEnd={handleCommit}
                    className={`${s.thumb} ${s.zIndex4}`}
                />
                <input
                    type="range"
                    min={initMin}
                    max={initMax}
                    step={step}
                    value={maxValue}
                    onChange={handleMaxChange}
                    onMouseUp={handleCommit}
                    onTouchEnd={handleCommit}
                    className={`${s.thumb} ${s.zIndex3}`}
                />

                <div className={s.track}/>
                <div
                    className={s.range}
                    style={{
                        left: `${minPos}%`,
                        width: `${maxPos - minPos}%`,
                    }}
                />
            </div>

            <div className={s.values}>
                {Number(minValue).toFixed(1)} — {Number(maxValue).toFixed(1)}
            </div>
        </div>
    );
};