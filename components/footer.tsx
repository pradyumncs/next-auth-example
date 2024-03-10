import CustomLink from "./custom-link"
import CustomLinklight from "./custom-linklight"

export default function Footer() {
  return (
    <footer className="flex flex-col w-full px-4 mx-0 my-4 space-y-1 text-sm md:max-w-3xl md:my-12 md:mx-auto sm:px-6 md:h-5 md:items-center md:space-y-0 md:space-x-4 md:flex-row">
      <CustomLink href="https://nextjs.authjs.dev">Documentation</CustomLink>
      <CustomLink href="https://www.npmjs.com/package/next-auth">
        NPM
      </CustomLink>
      <CustomLink href="https://github.com/nextauthjs/next-auth/tree/main/apps/examples/nextjs">
        Source on GitHub
      </CustomLink>
      <CustomLinklight href="/policy">Policy</CustomLinklight>
      <CustomLinklight href="/ai-chat">AI Chat</CustomLinklight>
      <CustomLinklight href="/channel">Channel</CustomLinklight>
      <CustomLinklight href="/feet">Feet Chat</CustomLinklight>
      <CustomLinklight href="/feet">PDF Chat</CustomLinklight>
      <CustomLinklight href="/sexy">Sexy Chat</CustomLinklight>
      <CustomLinklight href="/Manga">Manga</CustomLinklight>
      <CustomLinklight href="/onlyfans">OnlyFans</CustomLinklight>
    </footer>
  )
}
