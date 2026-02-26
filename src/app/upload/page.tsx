import React from 'react';

const categories = ['Painting', 'Photography', 'Sculpture', 'Digital Art', 'Mixed Media'];

export default function UploadPage() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Upload Your Art</h2>
      <form className="flex flex-col gap-4">
        <select name="category" className="input input-bordered" required>
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="file"
          name="image"
          accept="image/*"
          className="input input-bordered"
          required
        />
        <button type="submit" className="btn btn-primary">
          Upload
        </button>
      </form>
    </div>
  );
}
