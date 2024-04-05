export interface userStatusPreviewProps {
    user: string;
    time: string;
    avatar: string;
    status: statusProps[];
}

export interface statusProps {
    type: statusType;
    viewedByMe: boolean;
    content: statusContentType;
}

export type statusType = "video" | "image" | "text" | "voice";

export type statusContentType = string;
