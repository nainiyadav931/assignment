"use server";

import React from "react";
import { blogListings } from "./../../data/Blogdata";
import Header from "../../components/Header";
import BlogCard from "../../components/BlogCard";

export interface BlogData {
  id: number;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  date: string;
}

export async function getData(id: number) {
  const selectedBlog = blogListings.find((blog) => blog.id === Number(id));
  return selectedBlog;
}

export default async function BlogContent(context: any) {
  const data: any = await getData(context.params.slug);

  return (
    <div>
      <Header />
      <div className="mt-6 bg-white">
        <div className=" px-10 py-6 mx-auto">
          <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
            <a
              href="#_"
              className="block transition duration-200 ease-out transform hover:scale-110"
            >
              <img
                className="object-cover w-full shadow-sm h-full"
                src={data.imageUrl}
              />
            </a>
            <div className="flex items-center justify-start mt-4 mb-4"></div>
            <div className="mt-2">
              <a
                href="#"
                className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-purple-500  hover:underline"
              >
                {data.title}
              </a>
            </div>

            <div className="max-w-4xl px-10  mx-auto text-2xl text-gray-700 mt-4 rounded bg-gray-100">
              <div>{data.content}</div>
            </div>
          </div>

          <h2 className="text-2xl mt-4 text-gray-500 font-bold text-center">
            Related Posts
          </h2>
          <div className="container mx-auto px-10 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogListings.slice(0, 3).map((blog, index) => (
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
        </div>
      </div>
    </div>
  );
}
