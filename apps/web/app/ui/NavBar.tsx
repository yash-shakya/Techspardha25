// Purpose: TO have a navbar
interface NavItem {
	name: string;
	link: string;
}
interface NavBarProps {
	navitems: NavItem[];
}

//        /* TODO: A (position: absolute) NAVBAR to be added here */
//        /* TODO: If name == 'logo' then its link will have the logo path and it will be wrapped with a <Image> tag by next/image
//        /* Use Link from next/link
//        /* Read about next/Image its <Image> tag is little different and difficult from <img />

export default function NavBar({ navitems }: NavBarProps) {
	console.log(navitems);
	return <></>;
}
