import { type ChangeEvent, useState } from "react";
import s from './DoubleRangeSlider.module.css';

export const DoubleRangeSlider = ({ min = 0, max = 10, step = 0.1, gap = 0 }) => {
    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);

    const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(e.target.value), maxValue - gap);
        setMinValue(Number(value.toFixed(2)))
    };

    const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(e.target.value), minValue + gap);
        setMaxValue(Number(value.toFixed(2)))
    };

    const minPos = ((minValue - min) / (max - min)) * 100;
    const maxPos = ((maxValue - min) / (max - min)) * 100;

    return (
        <div className={s.wrapper}>
            <div className={s.slider}>
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={minValue}
                    onChange={handleMinChange}
                    className={`${s.thumb} ${s.zIndex4}`}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={maxValue}
                    onChange={handleMaxChange}
                    className={`${s.thumb} ${s.zIndex3}`}
                />

                <div className={s.track} />
                <div
                    className={s.range}
                    style={{
                        left: `${minPos}%`,
                        width: `${maxPos - minPos}%`,
                    }}
                />
            </div>

            <div className={s.values}>
                {minValue} — {maxValue}
            </div>
        </div>
    );
};