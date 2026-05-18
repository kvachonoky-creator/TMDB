import {type ChangeEvent, useEffect, useRef, useState} from "react";
import {useDebounce} from "@/common/hooks";
import s from './DoubleRangeSlider.module.css';

const gap = 0
const step = 0.1

type RangeValue = {
    min: number
    max: number
}

type Props = {
    initMin: number
    initMax: number
    value: RangeValue
    onChange: (value: RangeValue) => void
}

export const DoubleRangeSlider = ({initMin, initMax, value, onChange}: Props) => {
    const [range, setRange] = useState(value);
    const debouncedRange = useDebounce(range, 500);
    const isInitialDebounce = useRef(true);
    const committedValueRef = useRef(value);

    useEffect(() => {
        if (isInitialDebounce.current) {
            isInitialDebounce.current = false;
            return;
        }

        if (
            debouncedRange.min === committedValueRef.current.min &&
            debouncedRange.max === committedValueRef.current.max
        ) {
            return;
        }

        committedValueRef.current = debouncedRange;
        onChange(debouncedRange);
    }, [debouncedRange, onChange]);

    const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = Number(e.target.value);

        setRange(current => ({
            ...current,
            min: Number(Math.min(inputValue, current.max - gap).toFixed(1)),
        }))
    };

    const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = Number(e.target.value);

        setRange(current => ({
            ...current,
            max: Number(Math.max(inputValue, current.min + gap).toFixed(1)),
        }))
    };

    const diff = initMax - initMin;
    const minPos = diff > 0 ? ((range.min - initMin) / diff) * 100 : 0;
    const maxPos = diff > 0 ? ((range.max - initMin) / diff) * 100 : 100;

    return (
        <div className={s.wrapper}>
            <div className={s.slider}>
                <input
                    type="range"
                    min={initMin}
                    max={initMax}
                    step={step}
                    value={range.min}
                    onChange={handleMinChange}
                    className={`${s.thumb} ${s.zIndex4}`}
                />
                <input
                    type="range"
                    min={initMin}
                    max={initMax}
                    step={step}
                    value={range.max}
                    onChange={handleMaxChange}
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
                {Number(range.min).toFixed(1)} - {Number(range.max).toFixed(1)}
            </div>
        </div>
    );
};
