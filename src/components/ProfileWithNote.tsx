import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProfileWithNoteProps {
  profileImage?: string;
  note?: string;
  name?: string;
  size?: number;
  className?: string;
}

const ProfileWithNote: React.FC<ProfileWithNoteProps> = ({
  profileImage,
  note,
  name,
  size = 56,
  className = "",
}) => {
  const fallbackImage = "/07e28f82-bd38-410c-a208-5db174616626.png";

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Note bubble - only show if note exists */}
      {note && (
        <div className="mb-2 max-w-[120px]">
          <div className="bg-muted rounded-full px-3 py-1.5 text-xs text-muted-foreground text-center break-words">
            {note}
          </div>
        </div>
      )}
      
      {/* Profile picture */}
      <Avatar 
        className="border-2 border-background"
        style={{ width: size, height: size }}
      >
        <AvatarImage 
          src={profileImage || fallbackImage} 
          alt={name || "Profile"} 
        />
        <AvatarFallback>
          <img 
            src={fallbackImage} 
            alt="Default profile" 
            className="w-full h-full object-cover"
          />
        </AvatarFallback>
      </Avatar>
      
      {/* Optional name below profile */}
      {name && (
        <span className="text-xs text-muted-foreground mt-1 text-center max-w-[80px] truncate">
          {name}
        </span>
      )}
    </div>
  );
};

export default ProfileWithNote;