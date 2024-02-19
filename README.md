# Remix Web Project Template

Welcome to the Remix Web Project Template! This template is designed to kickstart your web development projects by providing a solid foundation with some of the best tools in the industry. Whether you're building a small personal project or a large-scale application, this template has you covered.

## Features

- **Remix**: A powerful and flexible framework that lets you build better websites faster. Remix is designed to take full advantage of the web platform, providing a seamless development experience.
- **Tailwind CSS**: A utility-first CSS framework packed with classes like `flex`, `pt-4`, `text-center`, and `rotate-90` that can be composed to build any design, directly in your markup.

- **Google Fonts**: We've included a couple of the most popular Google Fonts to make your web applications look beautiful right from the start.

- **Shadcn UI**

> Remove Radix-theme. Hard to make it work with Vite + Remix

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
