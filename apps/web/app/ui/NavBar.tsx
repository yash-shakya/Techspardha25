// Purpose: TO have a navbar
interface NavItem {
    name: string,
    link: string
}
interface NavBarProps {
    navitems: NavItem[]
}

//        /* TODO: A (position: absolute) NAVBAR to be added here */


export default function NavBar ({navitems}: NavBarProps){
    console.log(navitems)
    return (
        <>
        </>
    )
}