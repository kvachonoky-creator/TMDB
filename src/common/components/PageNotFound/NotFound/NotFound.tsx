import s from './NotFound.module.css'

export const NotFound = () => (
    <svg className={s.illustration} viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="160" height="100" rx="12" fill="currentColor" opacity="0.08"/>
        <rect x="35" y="35" width="130" height="70" rx="8" fill="currentColor" opacity="0.1"/>
        <circle cx="100" cy="60" r="22" fill="currentColor" opacity="0.15"/>
        <path d="M88 60 L100 48 L112 60 L100 72 Z" fill="currentColor" opacity="0.4"/>
        <line x1="60" y1="90" x2="140" y2="90" stroke="currentColor" strokeWidth="2" opacity="0.2" strokeLinecap="round"/>
        <circle cx="45" cy="45" r="4" fill="currentColor" opacity="0.3"/>
        <circle cx="57" cy="45" r="4" fill="currentColor" opacity="0.3"/>
        <circle cx="69" cy="45" r="4" fill="currentColor" opacity="0.3"/>
    </svg>
)