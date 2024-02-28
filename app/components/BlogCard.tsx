import React from 'react';
import Link from 'next/link';

interface BlogCardProps {
  id: number;  
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, imageUrl, date, id }) => {
  return (
    <div className="bg-white overflow-hidden shadow-sm rounded-xl">
      <img className="w-full h-40 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <Link href={`/blog/${id}`}> <h3 className="text-xl font-semibold mb-2 text-gray-700">{title}</h3></Link>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
