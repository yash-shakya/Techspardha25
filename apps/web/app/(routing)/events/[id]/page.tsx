import SERVICES from "@/app/server/actions/services";
import React from "react"
import SingleEventClient from "./EventByIdClient";

interface SingleEventProps {
  params: Promise<{ id: string }>
}

const SingleEventPage: React.FC<SingleEventProps> = async ({ params }) => {
  let id = (await params).id;
  console.log(id);
  // Id may have '%20' in it, so we need to replace it with ' '
  id = id.replace(/%20/g, " ");
  console.log(id);
  const event = await SERVICES.getEventById(id);
  // console.log(event);
  const rules = typeof event.rules == 'string' ? (event.rules as any as string).split("|") : event.rules;
  event.rules = rules;
  return <SingleEventClient event={event} />
}

export default SingleEventPage;