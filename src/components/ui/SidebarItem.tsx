

interface SidebarItemProps {
  icon: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export function SidebarItem ({ icon, label, href, isActive }:SidebarItemProps) {
  return (
    <li className={`flex max-sm:gap-2 lg:gap-2 p-3 text-sm hover:text-[#0D6EFD] hover:bg-gray-100 cursor-pointer  ${isActive ? 'text-[#0D6EFD] bg-blue-100 rounded-lg' : ''}`}>
      <img src={icon} alt={label} className="w-6 lg:w-4" />
      <a href={href} className="max-lg:hidden max-sm:block">{label}</a>
    </li>
  );
};

