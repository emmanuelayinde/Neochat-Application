import { callProps, userStatusPreviewProps } from "../@types";
import { avatars } from "./avatar";

// Status
export const recentStatus: userStatusPreviewProps[] = [
  {
    avatar: avatars[1].url,
    time: "Just now",
    user: "Emmanuel Ishola",
    status: [
      { content: "Cool", type: "text", viewedByMe: false },
      { content: "Cool", type: "image", viewedByMe: true },
      { content: "Cool", type: "video", viewedByMe: false },
      { content: "Cool", type: "voice", viewedByMe: false },
    ],
  },
  {
    avatar: avatars[2].url,
    time: "1 min ago",
    user: "Ishola Emmanuel",
    status: [
      { content: "Cool", type: "text", viewedByMe: false },
      { content: "Cool", type: "image", viewedByMe: true },
      { content: "Cool", type: "video", viewedByMe: false },
      { content: "Cool", type: "voice", viewedByMe: false },
    ],
  },
  {
    avatar: avatars[3].url,
    time: "2 hours ago",
    user: "Ishow",
    status: [
      { content: "Cool", type: "text", viewedByMe: false },
      { content: "Cool", type: "image", viewedByMe: true },
      { content: "Cool", type: "video", viewedByMe: false },
      { content: "Cool", type: "voice", viewedByMe: false },
    ],
  },
  {
    avatar: avatars[4].url,
    time: "1:35am",
    user: "Solution ",
    status: [
      { content: "Cool", type: "text", viewedByMe: false },
      { content: "Cool", type: "image", viewedByMe: true },
      { content: "Cool", type: "video", viewedByMe: false },
      { content: "Cool", type: "voice", viewedByMe: false },
    ],
  },
  {
    avatar: avatars[3].url,
    time: "2 hours ago",
    user: "Ishow",
    status: [
      { content: "Cool", type: "text", viewedByMe: false },
      { content: "Cool", type: "image", viewedByMe: true },
      { content: "Cool", type: "video", viewedByMe: false },
      { content: "Cool", type: "voice", viewedByMe: false },
    ],
  },
  {
    avatar: avatars[4].url,
    time: "1:35am",
    user: "Solution ",
    status: [
      { content: "Cool", type: "text", viewedByMe: false },
      { content: "Cool", type: "image", viewedByMe: true },
      { content: "Cool", type: "video", viewedByMe: false },
      { content: "Cool", type: "voice", viewedByMe: false },
    ],
  },
  {
    avatar: avatars[4].url,
    time: "1:35am",
    user: "Solution ",
    status: [
      { content: "Cool", type: "text", viewedByMe: false },
      { content: "Cool", type: "image", viewedByMe: true },
      { content: "Cool", type: "video", viewedByMe: false },
      { content: "Cool", type: "voice", viewedByMe: false },
    ],
  },
  {
    avatar: avatars[3].url,
    time: "2 hours ago",
    user: "Ishow",
    status: [
      { content: "Cool", type: "text", viewedByMe: false },
      { content: "Cool", type: "image", viewedByMe: true },
      { content: "Cool", type: "video", viewedByMe: false },
      { content: "Cool", type: "voice", viewedByMe: false },
    ],
  },
  {
    avatar: avatars[4].url,
    time: "1:35am",
    user: "Solution ",
    status: [
      { content: "Cool", type: "text", viewedByMe: false },
      { content: "Cool", type: "image", viewedByMe: true },
      { content: "Cool", type: "video", viewedByMe: false },
      { content: "Cool", type: "voice", viewedByMe: false },
    ],
  },
  {
    avatar: avatars[4].url,
    time: "1:35am",
    user: "Solution ",
    status: [
      { content: "Cool", type: "text", viewedByMe: false },
      { content: "Cool", type: "image", viewedByMe: true },
      { content: "Cool", type: "video", viewedByMe: false },
      { content: "Cool", type: "voice", viewedByMe: false },
    ],
  },
  {
    avatar: avatars[3].url,
    time: "2 hours ago",
    user: "Ishow",
    status: [
      { content: "Cool", type: "text", viewedByMe: false },
      { content: "Cool", type: "image", viewedByMe: true },
      { content: "Cool", type: "video", viewedByMe: false },
      { content: "Cool", type: "voice", viewedByMe: false },
    ],
  },
  {
    avatar: avatars[4].url,
    time: "1:35am",
    user: "Solution ",
    status: [
      { content: "Cool", type: "text", viewedByMe: false },
      { content: "Cool", type: "image", viewedByMe: true },
      { content: "Cool", type: "video", viewedByMe: false },
      { content: "Cool", type: "voice", viewedByMe: false },
    ],
  },
];

export const viewedStatus: userStatusPreviewProps[] = [
  {
    avatar: avatars[1].url,
    time: "Just now",
    user: "Emmanuel Ishola",
    status: [
      { content: "Cool", type: "text", viewedByMe: true },
      { content: "Cool", type: "image", viewedByMe: true },
      { content: "Cool", type: "video", viewedByMe: true },
      { content: "Cool", type: "voice", viewedByMe: true },
    ],
  },
  {
    avatar: avatars[1].url,
    time: "1 min ago",
    user: "Ishola Emmanuel",
    status: [
      { content: "Cool", type: "text", viewedByMe: true },
      { content: "Cool", type: "image", viewedByMe: true },
      { content: "Cool", type: "video", viewedByMe: true },
      { content: "Cool", type: "voice", viewedByMe: true },
    ],
  },
  {
    avatar: avatars[1].url,
    time: "2 hours ago",
    user: "Ishow",
    status: [
      { content: "Cool", type: "text", viewedByMe: true },
      { content: "Cool", type: "image", viewedByMe: true },
      { content: "Cool", type: "video", viewedByMe: true },
      { content: "Cool", type: "voice", viewedByMe: true },
    ],
  },
  {
    avatar: avatars[1].url,
    time: "1:35am",
    user: "Solution ",
    status: [
      { content: "Cool", type: "text", viewedByMe: true },
      { content: "Cool", type: "image", viewedByMe: true },
      { content: "Cool", type: "video", viewedByMe: true },
      { content: "Cool", type: "voice", viewedByMe: true },
    ],
  },
];

// Calls History

export const callHistory: callProps[] = [
  {
    avatar: avatars[0].url,
    caller: "Favour James",
    status: "sent",
    time: "2:45am",
    duration: "45 mins",
  },
  {
    avatar: avatars[2].url,
    caller: "Mary Brian",
    status: "missed",
    time: "12:45pm",
    duration: "25 mins",
  },
  {
    avatar: avatars[3].url,
    caller: "Emmanuel Ishola",
    status: "canceled",
    time: "8:59pm",
    duration: "1h 50mins",
  },
  {
    avatar: avatars[4].url,
    caller: "Mark Henry",
    status: "received",
    time: "12:45pm",
    duration: "5 secs",
  },
  {
    avatar: avatars[5].url,
    caller: "Favour James",
    status: "sent",
    time: "2:45am",
    duration: "45 mins",
  },
  {
    avatar: avatars[6].url,
    caller: "Mary Brian",
    status: "missed",
    time: "12:45pm",
    duration: "25 mins",
  },
  {
    avatar: avatars[7].url,
    caller: "Emmanuel Ishola",
    status: "canceled",
    time: "8:59pm",
    duration: "1h 50mins",
  },
  {
    avatar: avatars[8].url,
    caller: "Mark Henry",
    status: "received",
    time: "12:45pm",
    duration: "5 secs",
  },
  {
    avatar: avatars[0].url,
    caller: "Favour James",
    status: "sent",
    time: "2:45am",
    duration: "45 mins",
  },
  {
    avatar: avatars[2].url,
    caller: "Mary Brian",
    status: "missed",
    time: "12:45pm",
    duration: "25 mins",
  },
  {
    avatar: avatars[3].url,
    caller: "Emmanuel Ishola",
    status: "canceled",
    time: "8:59pm",
    duration: "1h 50mins",
  },
  {
    avatar: avatars[4].url,
    caller: "Mark Henry",
    status: "received",
    time: "12:45pm",
    duration: "5 secs",
  },
  {
    avatar: avatars[5].url,
    caller: "Favour James",
    status: "sent",
    time: "2:45am",
    duration: "45 mins",
  },
  {
    avatar: avatars[6].url,
    caller: "Mary Brian",
    status: "missed",
    time: "12:45pm",
    duration: "25 mins",
  },
  {
    avatar: avatars[7].url,
    caller: "Emmanuel Ishola",
    status: "canceled",
    time: "8:59pm",
    duration: "1h 50mins",
  },
  {
    avatar: avatars[8].url,
    caller: "Mark Henry",
    status: "received",
    time: "12:45pm",
    duration: "5 secs",
  },
];

// Text Status Screen Color
export const textStatusScreenColor = [
  "#4CAF50",
  "#2196F3",
  "#9E9E9E",
  "#FF0000",
  "#FFEB3B",
  "#03A9F4",
  "#9C27B0",
];



export const OnboardingScreenContent = [
  { title: 'title 1', subTitle: 'sub title 1', image: avatars[8] },
  { title: 'title 2', subTitle: 'sub title 2', image: avatars[7] },
  { title: 'title 3', subTitle: 'sub title 3', image: avatars[6] },
]