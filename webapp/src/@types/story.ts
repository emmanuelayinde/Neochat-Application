export interface userStoryPreviewProps {
    user: string;
    time: string;
    avatar: string;
    stories: storyProps[];
}

export interface storyProps {
    type: storyType;
    viewedByMe: boolean;
    content: storyContentType;
}

export type storyType = "video" | "image" | "text" | "voice";

export type storyContentType = string;
