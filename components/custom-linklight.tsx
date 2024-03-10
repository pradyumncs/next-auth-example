import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

interface CustomLinkProps extends React.LinkHTMLAttributes<HTMLAnchorElement> {
  href: string
}

const CustomLinklight = ({
  href,
  children,
  className,
  ...rest
}: CustomLinkProps) => {
  const isInternalLink = href.startsWith("/")
  const isAnchorLink = href.startsWith("#")

  if (isInternalLink || isAnchorLink) {
    return (
      // Added 'text-white' to the className for internal and anchor links
      <Link href={href} className={cn("text-white", className)} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    // Added 'text-white' to the className for external links
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("items-center underline text-white", className)}
      {...rest}
    >
      {children}
      <ExternalLink className="ml-0.5 h-4 w-4 inline-block" />
    </Link>
  )
}

export default CustomLinklight
