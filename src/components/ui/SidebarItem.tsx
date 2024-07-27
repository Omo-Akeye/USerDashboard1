

interface SidebarItemProps {
  icon: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export function SidebarItem ({ icon, label, href, isActive }:SidebarItemProps) {
  return (
    <li className={`flex gap-2 p-3 text-sm ${isActive ? 'text-[#0D6EFD] bg-blue-100 rounded-lg' : ''}`}>
      <img src={icon} alt={label} />
      <a href={href}>{label}</a>
    </li>
  );
};

