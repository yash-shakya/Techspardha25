import SERVICES from "@/app/server/actions/services"

export default async function Testing(){
    console.log(await SERVICES.getAllDetailedEvents());
    return <h1>WElcome to testing page</h1>
}