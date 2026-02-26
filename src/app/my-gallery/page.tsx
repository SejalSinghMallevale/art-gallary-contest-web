import React from 'react';
import Image from 'next/image';

// TODO: Replace with real user images from backend
const userImages = [
  { url: '/placeholder1.jpg', category: 'Painting' },
  { url: '/placeholder2.jpg', category: 'Photography' },
];

export default function MyGalleryPage() {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">My Uploaded Artworks</h2>
      <div className="grid grid-cols-2 gap-4">
        {userImages.map((img, idx) => (
          <div key={idx} className="border rounded p-2">
            <Image
              src={img.url}
              alt={img.category}
              width={400}
              height={192}
              className="w-full h-48 object-cover rounded"
            />
            <div className="mt-2 text-center">{img.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
