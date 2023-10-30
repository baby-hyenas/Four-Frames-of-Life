// 'use client';

// import { Avatar } from 'flowbite-react';

type NavBarProps = {
  title: string
};

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-10 bg-purple-500 font-bold text-gray-950 items-center justify-center">
      {props.title}
    </div>
  );
}

export default NavBar