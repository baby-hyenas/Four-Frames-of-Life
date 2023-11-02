type NavBarProps = {
  title: string
};

const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  return (
    <div className="sticky top-0 flex w-full h-10 z-10 bg-gradient-to-r from-purple-500 to-pink-500 font-bold text-gray-950 text-center justify-center items-center">
      <span className="align-center">
        {props.title}
      </span>
    </div>
  );
}

export default NavBar