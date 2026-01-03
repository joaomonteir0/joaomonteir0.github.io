import React from 'react'
import { Link } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="text-center px-6">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-4xl font-bold text-base-content mb-4">Page Not Found</h2>
          <p className="text-xl text-base-content/60 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <Link
          to="/"
          className="btn btn-primary btn-lg gap-2"
        >
          <HiHome className="text-xl" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
