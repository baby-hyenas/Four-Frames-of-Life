// 'use client';

// import { Avatar } from 'flowbite-react';

type NavBarProps = {
  title: string
};

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  return (
    <div className="h-15 bg-purple-500 font-bold text-gray-950">
      {props.title}
    </div>
  );
}

export default NavBar