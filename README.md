# Art Gallery Contest Web

A React SSR application for artistic people to participate in art contests.

## Features

- User registration (username, email, phone, password)
- Login (username, password)
- Select art category and upload image (one at a time)
- View images uploaded by the user
- View images uploaded by all users

## Tech Stack

- React (with Vite)
- TypeScript
- Tailwind CSS
- AWS CDK (for deployment)

## Getting Started

### Development

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
npm run preview
```

### Deployment (AWS CDK)

- See `bin/` and `lib/` directories for infrastructure code

## Folder Structure

- `/src` - Main application code
- `/bin` - AWS CDK entrypoint
- `/lib` - AWS CDK stack

## License

MIT
