import { Router } from "express";
import { isAuthenticated } from "../middleware";
import { chatControllers } from "../controllers";


const chatRoutes = Router()


chatRoutes.get('/user-chats', isAuthenticated, chatControllers.userChats)


// Get 1-1 chat messages

// Get group chat messages

// Get single message



// Post 1-1 message to chat

// Post group message to group chat



// Share 1-1 message 

// Share group message



// Delete a 1-1 chat that is less than 15mins

// Delete a group chat that is less than 15mins



// Update a 1-1 message than is less than 15mins

// Update a group message that is less than 15mins



// Clear 1-1 chat

// Clear group chat





export default chatRoutes;
