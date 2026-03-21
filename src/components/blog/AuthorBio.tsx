import React from "react";

interface Author {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export function AuthorBio({ author }: { author: Author }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-8 rounded-3xl bg-surface-container/30 border border-outline/10 backdrop-blur-sm">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary font-headline font-bold text-2xl overflow-hidden shrink-0 border-2 border-primary/20">
        {author.avatar ? (
          <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
        ) : (
          author.name.charAt(0)
        )}
      </div>
      <div className="text-center md:text-left">
        <div className="text-sm font-mono text-primary uppercase tracking-widest mb-1">{author.role}</div>
        <h4 className="text-xl font-headline font-bold text-on-surface mb-2">{author.name}</h4>
        <p className="text-on-surface/60 font-body text-sm leading-relaxed">
          {author.bio}
        </p>
      </div>
    </div>
  );
}
