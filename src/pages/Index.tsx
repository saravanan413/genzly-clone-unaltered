import React from "react";
import NotesGrid from "@/components/NotesGrid";

const Index = () => {
  // Sample data - replace with your actual notes data
  const notesData = [
    {
      id: "1",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      note: "At the gym 💪",
      name: "John",
    },
    {
      id: "2", 
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      note: "Coffee time ☕",
      name: "Sarah",
    },
    {
      id: "3",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", 
      note: "Working late tonight",
      name: "Mike",
    },
    {
      id: "4",
      // No profile image - will use fallback
      note: "Traveling ✈️",
      name: "Alex",
    },
    {
      id: "5",
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      // No note - won't show note bubble
      name: "Emma",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-xl font-semibold mb-6">Notes</h1>
        
        <NotesGrid notes={notesData} />
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          Instagram DM-style notes implementation
        </div>
      </div>
    </div>
  );
};

export default Index;
