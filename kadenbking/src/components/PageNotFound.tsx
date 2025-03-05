'use client';

import React from "react";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center py-24">
      <h1 className="text-4xl text-extraDarkBlue dark:text-lightBlue font-bold my-12">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-darkBlue dark:text-white mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primaryBlue text-white rounded-md hover:bg-darkBlue transition-colors duration-300"
      >
        Return Home
      </Link>
    </div>
  );
}
