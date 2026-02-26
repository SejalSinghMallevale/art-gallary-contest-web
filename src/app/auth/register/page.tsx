import React from 'react';

export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="input input-bordered"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="input input-bordered"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered"
          required
        />
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}
