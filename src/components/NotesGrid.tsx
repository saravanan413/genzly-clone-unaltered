import React from "react";
import ProfileWithNote from "./ProfileWithNote";

interface NoteItem {
  id: string;
  profileImage?: string;
  note?: string;
  name?: string;
}

interface NotesGridProps {
  notes: NoteItem[];
  className?: string;
}

const NotesGrid: React.FC<NotesGridProps> = ({ notes, className = "" }) => {
  return (
    <div className={`flex gap-4 overflow-x-auto pb-4 ${className}`}>
      {notes.map((item) => (
        <ProfileWithNote
          key={item.id}
          profileImage={item.profileImage}
          note={item.note}
          name={item.name}
          className="flex-shrink-0"
        />
      ))}
    </div>
  );
};

export default NotesGrid;