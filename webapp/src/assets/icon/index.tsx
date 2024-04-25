interface IProps {
    styles?: string,
    fill?: string,
    stroke?: string,
}

export const GroupIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>
}

export const ChatIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
}

export const StoryIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
}

export const ReloadIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
    </svg>
}

export const PhoneIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
}

export const UserIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
}

export const IncomingCallIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return < svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles} >
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
    </svg >
}

export const OutgoingCallIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
    </svg>
}

export const MissedCallIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 3.75 18 6m0 0 2.25 2.25M18 6l2.25-2.25M18 6l-2.25 2.25m1.5 13.5c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
    </svg>
}

export const MicIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
    </svg>
}

export const SunIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
}

export const MoonIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
}

export const LockIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
}

export const VideoIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
}

export const SearchIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
}

export const AddIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
}

export const AttachmentIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
    </svg>
}

export const SendIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
}

export const EmojiIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
    </svg>
}

export const TimesIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
}


export const DocumentIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
}

export const DownloadIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
}

export const MusicIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
    </svg>
}

export const PlayIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
    </svg>
}


export const PauseIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
    </svg>
}

export const CircularExclaimationIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
    </svg>
}

export const ViewOnceIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 36 36" strokeWidth={1.25} stroke={stroke} className={styles}>
        <path fillRule="evenodd" clipRule="evenodd" d="M18.0004 33.9999C18.0005 33.9999 18.0007 33.9999 18.0009 33.9999C18.1283 33.9999 18.2554 33.9984 18.3821 33.9955C19.2371 33.9754 19.9139 33.2661 19.8938 32.4112C19.8738 31.5563 19.1645 30.8795 18.3096 30.8995C18.207 30.9019 18.1041 30.9031 18.0009 30.9031C18.0007 30.9031 18.0005 30.9031 18.0004 30.9031V33.9999ZM18.0004 5.09673C18.0005 5.09673 18.0007 5.09673 18.0009 5.09673C18.1041 5.09673 18.207 5.09793 18.3096 5.10034C19.1645 5.12037 19.8738 4.44356 19.8938 3.58864C19.9139 2.73373 19.2371 2.02445 18.3821 2.00442C18.2554 2.00145 18.1283 1.99996 18.0009 1.99996C18.0007 1.99996 18.0005 1.99996 18.0004 1.99996V5.09673ZM25.6712 3.95526C24.921 3.54477 23.9801 3.82015 23.5696 4.57033C23.1591 5.32052 23.4345 6.26143 24.1846 6.67192C24.3645 6.77031 24.5417 6.87287 24.7162 6.97947C25.446 7.42523 26.3989 7.19498 26.8447 6.4652C27.2905 5.73542 27.0602 4.78246 26.3304 4.3367C26.114 4.20451 25.8942 4.07731 25.6712 3.95526ZM31.6641 9.67036C31.2183 8.94058 30.2654 8.71034 29.5356 9.1561C28.8058 9.60185 28.5756 10.5548 29.0213 11.2846C29.1279 11.4591 29.2305 11.6364 29.3289 11.8162C29.7394 12.5663 30.6803 12.8417 31.4305 12.4312C32.1806 12.0208 32.456 11.0798 32.0455 10.3297C31.9235 10.1066 31.7963 9.88677 31.6641 9.67036ZM33.9964 17.6187C33.9763 16.7638 33.2671 16.0869 32.4121 16.107C31.5572 16.127 30.8804 16.8363 30.9004 17.6912C30.9029 17.7938 30.9041 17.8967 30.9041 17.9999C30.9041 18.1032 30.9029 18.2061 30.9004 18.3087C30.8804 19.1636 31.5572 19.8729 32.4121 19.8929C33.2671 19.9129 33.9763 19.2361 33.9964 18.3812C33.9993 18.2544 34.0008 18.1273 34.0008 17.9999C34.0008 17.8725 33.9993 17.7454 33.9964 17.6187ZM32.0455 25.6702C32.456 24.92 32.1806 23.9791 31.4305 23.5686C30.6803 23.1581 29.7394 23.4335 29.3289 24.1837C29.2305 24.3635 29.1279 24.5408 29.0213 24.7153C28.5756 25.4451 28.8058 26.398 29.5356 26.8438C30.2654 27.2895 31.2183 27.0593 31.6641 26.3295C31.7963 26.1131 31.9235 25.8933 32.0455 25.6702ZM26.3304 31.6632C27.0602 31.2174 27.2905 30.2644 26.8447 29.5347C26.3989 28.8049 25.446 28.5746 24.7162 29.0204C24.5417 29.127 24.3645 29.2296 24.1846 29.328C23.4345 29.7384 23.1591 30.6794 23.5696 31.4295C23.9801 32.1797 24.921 32.4551 25.6712 32.0446C25.8942 31.9226 26.114 31.7954 26.3304 31.6632Z" fill="#8696A0"></path>
        <path fillRule="evenodd" clip-rule="evenodd" d="M18.0003 2C18.0002 2 18.0002 2 18.0001 2C9.16347 2 2 9.16344 2 18C2 26.8365 9.16347 34 18.0001 34C18.0002 34 18.0002 34 18.0003 34V30.9032C18.0002 30.9032 18.0002 30.9032 18.0001 30.9032C10.8738 30.9032 5.09679 25.1262 5.09679 18C5.09679 10.8737 10.8738 5.09677 18.0001 5.09677C18.0002 5.09677 18.0002 5.09677 18.0003 5.09677V2Z" fill="#8696A0"></path>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9361 10.7742C15.0809 10.7742 14.3877 11.4675 14.3877 12.3226C14.3877 13.1778 15.0809 13.871 15.9361 13.871H17.4844V23.6775C17.4844 24.5326 18.1777 25.2258 19.0328 25.2258C19.888 25.2258 20.5812 24.5326 20.5812 23.6775V12.3317C20.5812 12.3287 20.5812 12.3257 20.5812 12.3226C20.5812 11.4675 19.888 10.7742 19.0328 10.7742H15.9361Z" fill="#8696A0"></path>
    </svg>
}

export const OpenedViewOnceIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 36 36" strokeWidth={1} stroke={stroke} className={styles}>
        <path fillRule="evenodd" clipRule="evenodd" d="M18.0004 33.9999C18.0005 33.9999 18.0007 33.9999 18.0009 33.9999C18.1283 33.9999 18.2554 33.9984 18.3821 33.9955C19.2371 33.9754 19.9139 33.2661 19.8938 32.4112C19.8738 31.5563 19.1645 30.8795 18.3096 30.8995C18.207 30.9019 18.1041 30.9031 18.0009 30.9031C18.0007 30.9031 18.0005 30.9031 18.0004 30.9031V33.9999ZM18.0004 5.09673C18.0005 5.09673 18.0007 5.09673 18.0009 5.09673C18.1041 5.09673 18.207 5.09793 18.3096 5.10034C19.1645 5.12037 19.8738 4.44356 19.8938 3.58864C19.9139 2.73373 19.2371 2.02445 18.3821 2.00442C18.2554 2.00145 18.1283 1.99996 18.0009 1.99996C18.0007 1.99996 18.0005 1.99996 18.0004 1.99996V5.09673ZM25.6712 3.95526C24.921 3.54477 23.9801 3.82015 23.5696 4.57033C23.1591 5.32052 23.4345 6.26143 24.1846 6.67192C24.3645 6.77031 24.5417 6.87287 24.7162 6.97947C25.446 7.42523 26.3989 7.19498 26.8447 6.4652C27.2905 5.73542 27.0602 4.78246 26.3304 4.3367C26.114 4.20451 25.8942 4.07731 25.6712 3.95526ZM31.6641 9.67036C31.2183 8.94058 30.2654 8.71034 29.5356 9.1561C28.8058 9.60185 28.5756 10.5548 29.0213 11.2846C29.1279 11.4591 29.2305 11.6364 29.3289 11.8162C29.7394 12.5663 30.6803 12.8417 31.4305 12.4312C32.1806 12.0208 32.456 11.0798 32.0455 10.3297C31.9235 10.1066 31.7963 9.88677 31.6641 9.67036ZM33.9964 17.6187C33.9763 16.7638 33.2671 16.0869 32.4121 16.107C31.5572 16.127 30.8804 16.8363 30.9004 17.6912C30.9029 17.7938 30.9041 17.8967 30.9041 17.9999C30.9041 18.1032 30.9029 18.2061 30.9004 18.3087C30.8804 19.1636 31.5572 19.8729 32.4121 19.8929C33.2671 19.9129 33.9763 19.2361 33.9964 18.3812C33.9993 18.2544 34.0008 18.1273 34.0008 17.9999C34.0008 17.8725 33.9993 17.7454 33.9964 17.6187ZM32.0455 25.6702C32.456 24.92 32.1806 23.9791 31.4305 23.5686C30.6803 23.1581 29.7394 23.4335 29.3289 24.1837C29.2305 24.3635 29.1279 24.5408 29.0213 24.7153C28.5756 25.4451 28.8058 26.398 29.5356 26.8438C30.2654 27.2895 31.2183 27.0593 31.6641 26.3295C31.7963 26.1131 31.9235 25.8933 32.0455 25.6702ZM26.3304 31.6632C27.0602 31.2174 27.2905 30.2644 26.8447 29.5347C26.3989 28.8049 25.446 28.5746 24.7162 29.0204C24.5417 29.127 24.3645 29.2296 24.1846 29.328C23.4345 29.7384 23.1591 30.6794 23.5696 31.4295C23.9801 32.1797 24.921 32.4551 25.6712 32.0446C25.8942 31.9226 26.114 31.7954 26.3304 31.6632Z" fill="#8696A0"></path>
        <path fillRule="evenodd" clip-rule="evenodd" d="M18.0003 2C18.0002 2 18.0002 2 18.0001 2C9.16347 2 2 9.16344 2 18C2 26.8365 9.16347 34 18.0001 34C18.0002 34 18.0002 34 18.0003 34V30.9032C18.0002 30.9032 18.0002 30.9032 18.0001 30.9032C10.8738 30.9032 5.09679 25.1262 5.09679 18C5.09679 10.8737 10.8738 5.09677 18.0001 5.09677C18.0002 5.09677 18.0002 5.09677 18.0003 5.09677V2Z" fill="#8696A0"></path>
        {/* <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9361 10.7742C15.0809 10.7742 14.3877 11.4675 14.3877 12.3226C14.3877 13.1778 15.0809 13.871 15.9361 13.871H17.4844V23.6775C17.4844 24.5326 18.1777 25.2258 19.0328 25.2258C19.888 25.2258 20.5812 24.5326 20.5812 23.6775V12.3317C20.5812 12.3287 20.5812 12.3257 20.5812 12.3226C20.5812 11.4675 19.888 10.7742 19.0328 10.7742H15.9361Z" fill="#8696A0"></path> */}
    </svg>
}

export const TrashIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
}

export const CheckBadgeIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    </svg>
}

export const PhotoIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
}

export const FilmIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
    </svg>
}

export const StartIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
}

export const BookmarkIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
    </svg>
}

export const ChartIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
    </svg>
}

export const FileIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
    return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1} stroke={stroke} className={styles}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
}





// export const IncomingCallIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
//     return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1} stroke={stroke} className={styles}>
//         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
//     </svg>
// }





// export const FileIcon = ({ styles = "w-6 h-6", fill = "none", stroke = "currentColor" }: IProps) => {
//     return <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1} stroke={stroke} className={styles}>
//         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
//     </svg>
// }