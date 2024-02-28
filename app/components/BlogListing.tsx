import React from 'react';
import BlogCard from '../components/BlogCard';
import {blogListings}  from '../data/Blogdata'

const BlogListingPage: React.FC = () => {
  return (
    <div className='container mx-auto px-10 py-10'>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogListings.map((blog, index) => (
        <BlogCard
          key={index}
          id={blog.id}
          title={blog.title}
          description={blog.description}
          imageUrl={blog.imageUrl}
          date={blog.date}
        />
      ))}
    </div>
    </div>
  );
};

export default BlogListingPage;
