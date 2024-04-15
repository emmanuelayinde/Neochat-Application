import { IChatPreview, IMessageProps, callProps, userStatusPreviewProps } from "../@types";
import { ChatIcon, GroupIcon, PhoneIcon, ReloadIcon, UserIcon } from '../assets'
import { avatars } from "./avatar";

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

export const menuTabs = [
  {
    icon: UserIcon,
    id: 'user-profile',
    label: "User Profile",
  },
  {
    icon: ChatIcon,
    id: 'user-chats',
    label: "User Chats",
  },
  {
    icon: GroupIcon,
    id: 'user-groups',
    label: "User Groups",
  },
  {
    icon: ReloadIcon,
    id: 'stories',
    label: "Active Stories",
  },
  {
    icon: PhoneIcon,
    id: 'call-history',
    label: "Call History",
  },
]

export const userChats: IChatPreview[] = [
  {
    chatId: '1',
    participants: [{
      _id: 'user_1',
      name: 'SoluTion',
      username: 'solution',
      avatar: avatars[0].url,
      isOnline: true,
      lastSeen: new Date()
    }],
    lastMessage: {
      _id: 'message_1',
      isReply: false,
      isViewOnce: false,
      sender: {
        _id: 'user_1',
        name: 'SoluTion',
        username: 'solution',
        avatar: avatars[0].url,
        isOnline: true,
        lastSeen: new Date()
      },
      text: "New Message",
      type: 'text-message',
      voiceNote: '',
    },
  },

  {
    chatId: '2',
    participants: [{
      _id: 'user_1',
      name: 'SoluTion',
      username: 'solution',
      avatar: avatars[2].url,
      isOnline: true,
      lastSeen: new Date()
    }]
  },
  {
    chatId: '3',
    participants: [{
      _id: 'user_1',
      name: 'SoluTion',
      username: 'solution',
      avatar: avatars[2].url,
      isOnline: true,
      lastSeen: new Date()
    }],
    lastMessage: {
      _id: 'message_1',
      isReply: false,
      isViewOnce: false,
      sender: {
        _id: 'user_1',
        name: 'SoluTion',
        username: 'solution',
        avatar: avatars[0].url,
        isOnline: true,
        lastSeen: new Date()
      },
      text: "New Message",
      type: 'text-message',
      voiceNote: '',
    },
  },
  {
    chatId: '4',
    participants: [{
      _id: 'user_1',
      name: 'SoluTion',
      username: 'solution',
      avatar: avatars[3].url,
      isOnline: true,
      lastSeen: new Date()
    }],
    lastMessage: {
      _id: 'message_1',
      isReply: false,
      isViewOnce: false,
      sender: {
        _id: 'user_1',
        name: 'SoluTion',
        username: 'solution',
        avatar: avatars[0].url,
        isOnline: true,
        lastSeen: new Date()
      },
      text: "New Message",
      type: 'text-message',
      voiceNote: '',
    },
  },

]

export const personalChatMessages: IMessageProps[] = [
  {
    _id: 'message-1',
    chatId: 'chat-1',
    sender: {
      _id: 'user-1',
      name: 'Emmanuel Ishola',
      username: '@Emmanuel',
      avatar: avatars[1].url,
      lastSeen: new Date(),
      isOnline: true,
    },
    editted: false,
    isReply: false,
    isViewOnce: false,
    messageType: '1-1',
    type: 'text-message',
    files: undefined,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati, iure reiciendis aliquid odit corrupti tenetur a libero ipsa placeat voluptas? Ratione, hic eos harum nemo labore voluptates, mollitia rem repellendus facilis nobis sint quidem aliquam deserunt iste corporis obcaecati inventore id ex beatae delectus quisquam! Architecto laborum veritatis assumenda!',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: 'message-12',
    chatId: 'chat-1',
    sender: {
      _id: 'user-2',
      name: 'Ayinde Ishola',
      username: '@Ayinde',
      avatar: avatars[1].url,
      lastSeen: new Date(),
      isOnline: false,
    },
    editted: false,
    isReply: false,
    isViewOnce: false,
    messageType: '1-1',
    type: 'text-message',
    files: [avatars[0].url],
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: 'message-2',
    chatId: 'chat-2',
    sender: {
      _id: 'user-2',
      name: 'Daniel Bryan',
      username: '@Daniel',
      avatar: avatars[2].url,
      lastSeen: new Date(),
      isOnline: true,
    },
    editted: true,
    isReply: false,
    isViewOnce: false,
    messageType: '1-1',
    type: 'image-message',
    files: [avatars[1].url, avatars[1].url],
    text: 'caption here',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: 'message-1',
    chatId: 'chat-1',
    sender: {
      _id: 'user-1',
      name: 'Emmanuel Ishola',
      username: '@Emmanuel',
      avatar: avatars[1].url,
      lastSeen: new Date(),
      isOnline: true,
    },
    editted: true,
    isReply: true,
    isViewOnce: false,
    messageType: '1-1',
    type: 'audio-message',
    files: undefined,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati, iure reiciendis aliquid odit corrupti tenetur a libero ipsa placeat voluptas? Ratione, hic eos harum nemo labore voluptates, mollitia rem repellendus facilis nobis sint quidem aliquam deserunt iste corporis obcaecati inventore id ex beatae delectus quisquam! Architecto laborum veritatis assumenda!',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: 'message-2',
    chatId: 'chat-2',
    sender: {
      _id: 'user-2',
      name: 'Daniel Bryan',
      username: '@Daniel',
      avatar: avatars[2].url,
      lastSeen: new Date(),
      isOnline: true,
    },
    editted: true,
    isReply: false,
    isViewOnce: true,
    messageType: '1-1',
    type: 'file-message',
    files: undefined,
    text: 'caption here',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: 'message-1',
    chatId: 'chat-1',
    sender: {
      _id: 'user-1',
      name: 'Emmanuel Ishola',
      username: '@Emmanuel',
      avatar: avatars[1].url,
      lastSeen: new Date(),
      isOnline: true,
    },
    editted: false,
    isReply: false,
    isViewOnce: false,
    messageType: '1-1',
    type: 'voice-message',
    files: undefined,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati, iure reiciendis aliquid odit corrupti tenetur a libero ipsa placeat voluptas? Ratione, hic eos harum nemo labore voluptates, mollitia rem repellendus facilis nobis sint quidem aliquam deserunt iste corporis obcaecati inventore id ex beatae delectus quisquam! Architecto laborum veritatis assumenda!',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: 'message-2',
    chatId: 'chat-2',
    sender: {
      _id: 'user-2',
      name: 'Daniel Bryan',
      username: '@Daniel',
      avatar: avatars[2].url,
      lastSeen: new Date(),
      isOnline: true,
    },
    editted: true,
    isReply: false,
    isViewOnce: false,
    messageType: '1-1',
    type: 'video-message',
    files: undefined,
    text: 'caption here',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]

export const images = [
  'https://images.pexels.com/photos/1068872/pexels-photo-1068872.jpeg?auto=compress&cs=tinysrgb&w=300.png',
  'https://images.pexels.com/photos/1144176/pexels-photo-1144176.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=252&fit=crop&h=408.png',
  'https://images.pexels.com/photos/1497148/pexels-photo-1497148.jpeg?auto=compress&cs=tinysrgb&w=300.png',
  'https://images.pexels.com/photos/209943/pexels-photo-209943.jpeg?auto=compress&cs=tinysrgb&w=300.png',
  'https://images.pexels.com/photos/250154/pexels-photo-250154.jpeg?auto=compress&cs=tinysrgb&w=300.png',
  'https://images.pexels.com/photos/6194940/pexels-photo-6194940.jpeg?auto=compress&cs=tinysrgb&w=300.png',
  'https://images.pexels.com/photos/2088282/pexels-photo-2088282.jpeg?auto=compress&cs=tinysrgb&w=300.png'
]

export const videos = [
  ''
]

export const palletes = {
  primary: "#43c651",
  secondary: "#056526",
  danger: '#BB2124',
  success: '#22BB33',
  dark: {
    primary: "#2e2e2e",
    secondary: "#262626",
    text: "#fefefe",
    icon: "#fefefe",
  },
  light: {
    primary: "#f3f3f3",
    secondary: "#fefefe",
    text: "#262626",
    icon: "#262626",
  }
}
