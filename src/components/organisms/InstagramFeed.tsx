// components/InstagramFeed.tsx
import React from 'react';

interface InstagramPost {
  id: string;
  thumbnailUrl: string;
  caption: string;
}

interface InstagramFeedProps {
  instagramPosts: InstagramPost[];
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({ instagramPosts }) => {
  return (
    <div>
      <h1>Instagram Feed</h1>
      <div>
        {instagramPosts.map((post) => (
          <div key={post.id}>
            <img src={post.thumbnailUrl} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;


