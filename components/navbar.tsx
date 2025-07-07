"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { TonConnectButton } from '@tonconnect/ui-react';

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">TON Portal</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/ai" 
              className={cn(
                "transition-colors",
                isActive("/ai") 
                  ? "text-primary font-semibold" 
                  : "text-gray-700 dark:text-gray-300 hover:text-primary"
              )}
            >
              AI Assistant
            </Link>
            <Link 
              href="/analytics" 
              className={cn(
                "transition-colors",
                isActive("/analytics") 
                  ? "text-primary font-semibold" 
                  : "text-gray-700 dark:text-gray-300 hover:text-primary"
              )}
            >
              Analytics
            </Link>
            <Link 
              href="/tools" 
              className={cn(
                "transition-colors",
                isActive("/tools") 
                  ? "text-primary font-semibold" 
                  : "text-gray-700 dark:text-gray-300 hover:text-primary"
              )}
            >
              Tools
            </Link>
            <Link 
              href="/events" 
              className={cn(
                "transition-colors",
                isActive("/events") 
                  ? "text-primary font-semibold" 
                  : "text-gray-700 dark:text-gray-300 hover:text-primary"
              )}
            >
              Events
            </Link>
            <Link 
              href="/resources" 
              className={cn(
                "transition-colors",
                isActive("/resources") 
                  ? "text-primary font-semibold" 
                  : "text-gray-700 dark:text-gray-300 hover:text-primary"
              )}
            >
              Resources
            </Link>
            
            {/* TON Connect Wallet Button */}
            <div className="ml-4">
              <TonConnectButton />
            </div>
          </div>

          {/* Mobile menu - add wallet button here too */}
          <div className="md:hidden flex items-center space-x-4">
            <TonConnectButton />
          </div>
        </div>
      </div>
    </nav>
  );
}