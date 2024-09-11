import Link from "next/link";
import { Home, Package, Settings, ShoppingCart } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-row items-center justify-center gap-x-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <Home className="h-4 w-4 transition-all group-hover:scale-110" />
            <span className="sr-only">Home</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="top">Home</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/orders"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Orders</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="top">Orders</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/products"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Package className="h-5 w-5" />
            <span className="sr-only">Products</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="top">Products</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="/settings"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
          >
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent side="top">Settings</TooltipContent>
      </Tooltip>
    </div>
  );
}
