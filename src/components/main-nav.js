"use client";
// Import necessary modules and components
import * as React from "react";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "/src/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "/src/components/ui/command";
import { Check, PlusCircle, ChevronsUpDown } from "lucide-react";
import { cn } from "/lib/utilstwo";
import { usePathname, useRouter } from "next/navigation";

// Define MainNavProps interface

// MainNav component
const MainNav = ({ data }) => {
  const pathname = usePathname();
  const router = useRouter(); // Use the useRouter hook

  // Create an array of routes based on the provided data
  const routes =
    data && data.length
      ? data.map((route) => ({
          href: `/businesses/category/${route.id}`,
          label: route.name,
          active: pathname === `/businesses/category/${route.id}`,
        }))
      : [];

  // Sort the routes alphabetically by label
  const sortedRoutes = [...routes].sort((a, b) =>
    a.label.localeCompare(b.label)
  );

  // State variables for the popover
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  /** @type {Category | null} */
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  // Filter the routes based on the search query
  const filteredRoutes = sortedRoutes.filter((route) =>
    route.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle category selection and route navigation
  const handleCategorySelect = (route) => {
    const selectedCategory = {
      href: route.href,
      id: "", // replace with the actual id
      name: route.label,
      billboard: {
        id: "",
        label: "",
        imageUrl: "",
      }, // replace with the actual Billboard
    };

    setSelectedCategory(selectedCategory);
    setOpen(false);

    // Navigate to the selected category's route
    router.push(route.href);
  };

  // Return the JSX structure for the component
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <nav className="text-xl flex items-center justify-between mx-auto">
          <button
            className={cn(
              "text-xl flex font-medium p-2 pl-3 pr-3 rounded-full bg-slate-100 dark:bg-neutral-800 border border-[#bfbfbf] transition-colors hover:text-neutral-600 focus:outline-none",
              open
                ? "text-neutral-800 dark:text-slate-100"
                : "text-neutral-700 dark:text-slate-300"
            )}
            onClick={() => setOpen(!open)}
          >
            {selectedCategory ? selectedCategory.name : "Categories"}
            <ChevronsUpDown className="flex ml-3 h-6 w-6 opacity-50" />
          </button>
        </nav>
      </PopoverTrigger>
      {open && (
        <PopoverContent
          className="w-[210px] cursor-pointer p-5 rounded-lg text-neutral-900 dark:text-white/80 bg-white dark:bg-zinc-800"
          style={{ maxHeight: "500px", overflowY: "auto" }}
        >
          <Command>
            <CommandList>
              <CommandItem className="justify-center">
                <input
                  type="text"
                  placeholder="Search category..."
                  className="w-[180px] p-2 border rounded-md fixed bg-neutral-300 dark:bg-zinc-900 z-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </CommandItem>
              <CommandSeparator />
              <CommandItem>
                <div
                  style={{
                    paddingTop: "40px",
                    overflowY: "auto",
                    height: "calc(100% - 50px)",
                  }}
                >
                  {/* Scrollable category content here */}
                  <CommandGroup
                    className="text-base md:text-lg cursor-pointer"
                    heading="CATEGORIES"
                  >
                    {filteredRoutes.map((route) => (
                      <CommandItem
                        key={route.href}
                        onSelect={() => handleCategorySelect(route)}
                        className="text-sm md:text-base"
                      >
                        {route.label}
                        {selectedCategory?.href === route.href && (
                          <Check className="ml-auto h-4 w-4" />
                        )}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </div>
              </CommandItem>
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <CommandItem
                  className="text-sm md:text-base cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  <PlusCircle className="mr-2 h-5 w-5" />
                  Create Category
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      )}
    </Popover>
  );
};

// Export the MainNav component
export default MainNav;
