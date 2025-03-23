
import { useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Send, Paperclip, MoreVertical, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  id: number;
  senderId: number;
  text: string;
  time: string;
}

interface Conversation {
  id: number;
  name: string;
  avatar?: string;
  lastMessage: string;
  time: string;
  unread: boolean;
}

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState<number>(1);
  const [newMessage, setNewMessage] = useState("");
  
  const [conversations] = useState<Conversation[]>([
    {
      id: 1,
      name: "Jane Cooper",
      avatar: "/placeholder.svg",
      lastMessage: "Great! I'll send the files tomorrow",
      time: "10:42 AM",
      unread: true
    },
    {
      id: 2,
      name: "Alex Morgan",
      avatar: "/placeholder.svg",
      lastMessage: "Can we schedule a call to discuss?",
      time: "Yesterday",
      unread: false
    },
    {
      id: 3,
      name: "Robert Johnson",
      avatar: "/placeholder.svg",
      lastMessage: "The project looks amazing! Thank you",
      time: "Monday",
      unread: false
    },
    {
      id: 4,
      name: "TechCorp Team",
      avatar: "/placeholder.svg",
      lastMessage: "Contract has been approved",
      time: "Apr 12",
      unread: false
    }
  ]);
  
  const [messages] = useState<Record<number, Message[]>>({
    1: [
      { id: 1, senderId: 2, text: "Hi there! I wanted to talk about the website redesign project", time: "10:30 AM" },
      { id: 2, senderId: 1, text: "Sure! I'm available to discuss. How can I help?", time: "10:35 AM" },
      { id: 3, senderId: 2, text: "We need to update the color scheme to match our new brand guidelines", time: "10:38 AM" },
      { id: 4, senderId: 2, text: "I'll email you the new brand book", time: "10:39 AM" },
      { id: 5, senderId: 1, text: "That would be great! I can work on that once I get the brand book", time: "10:40 AM" },
      { id: 6, senderId: 2, text: "Great! I'll send the files tomorrow", time: "10:42 AM" },
    ],
    2: [
      { id: 1, senderId: 2, text: "Hello, I'm interested in discussing the project details", time: "Yesterday" },
      { id: 2, senderId: 1, text: "Hi Alex, I'd be happy to discuss the project", time: "Yesterday" },
      { id: 3, senderId: 2, text: "Can we schedule a call to discuss?", time: "Yesterday" },
    ],
    3: [
      { id: 1, senderId: 2, text: "The project looks amazing! Thank you", time: "Monday" },
    ],
    4: [
      { id: 1, senderId: 2, text: "Contract has been approved", time: "Apr 12" },
    ]
  });
  
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would update the state and send the message to the server
      console.log(`Sending message to conversation ${selectedConversation}: ${newMessage}`);
      setNewMessage("");
    }
  };
  
  return (
    <DashboardLayout 
      title="Messages" 
      description="Communicate with clients and team members"
    >
      <Card className="overflow-hidden">
        <div className="flex h-[600px]">
          {/* Conversation list */}
          <div className="w-1/3 border-r">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search messages" 
                  className="pl-9"
                />
              </div>
            </div>
            <div className="overflow-y-auto h-[536px]">
              {conversations.map((conversation) => (
                <div 
                  key={conversation.id}
                  className={`flex items-start gap-3 p-4 cursor-pointer hover:bg-secondary ${
                    selectedConversation === conversation.id ? "bg-secondary" : ""
                  } ${conversation.unread ? "font-medium" : ""}`}
                  onClick={() => setSelectedConversation(conversation.id)}
                >
                  <Avatar>
                    <AvatarImage src={conversation.avatar} alt={conversation.name} />
                    <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex justify-between items-center mb-1">
                      <div className="font-medium">{conversation.name}</div>
                      <div className="text-xs text-muted-foreground">{conversation.time}</div>
                    </div>
                    <div className="text-sm text-muted-foreground truncate">
                      {conversation.lastMessage}
                    </div>
                  </div>
                  {conversation.unread && (
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Chat area */}
          <div className="w-2/3 flex flex-col">
            {/* Chat header */}
            <div className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={conversations.find(c => c.id === selectedConversation)?.avatar} alt={conversations.find(c => c.id === selectedConversation)?.name} />
                  <AvatarFallback>{conversations.find(c => c.id === selectedConversation)?.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{conversations.find(c => c.id === selectedConversation)?.name}</div>
                  <div className="text-xs text-muted-foreground">Online</div>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[456px]">
              {messages[selectedConversation]?.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.senderId === 1 ? "justify-end" : "justify-start"}`}
                >
                  {message.senderId !== 1 && (
                    <Avatar className="mr-2 mt-1">
                      <AvatarImage src={conversations.find(c => c.id === selectedConversation)?.avatar} alt={conversations.find(c => c.id === selectedConversation)?.name} />
                      <AvatarFallback>{conversations.find(c => c.id === selectedConversation)?.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <div 
                      className={`rounded-lg p-3 max-w-md break-words ${
                        message.senderId === 1 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {message.text}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 text-center">{message.time}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Message input */}
            <div className="border-t p-4">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage();
                    }
                  }}
                />
                <Button onClick={handleSendMessage}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default Messages;
