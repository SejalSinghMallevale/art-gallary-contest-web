import React from 'react';
import Image from 'next/image';

// TODO: Replace with real images from backend
const allImages = [
  { url: '/placeholder1.jpg', category: 'Painting', user: 'alice' },
  { url: '/placeholder2.jpg', category: 'Photography', user: 'bob' },
];

export default function GalleryPage() {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">All Artworks</h2>
      <div className="grid grid-cols-3 gap-4">
        {allImages.map((img, idx) => (
          <div key={idx} className="border rounded p-2">
            <Image
              src={img.url}
              alt={img.category}
              width={400}
              height={192}
              className="w-full h-48 object-cover rounded"
            />
            <div className="mt-2 text-center">
              {img.category} by {img.user}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
