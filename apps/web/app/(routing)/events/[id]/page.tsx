import SERVICES from "@/app/server/actions/services";
import React from "react"
import SingleEventClient from "./EventByIdClient";

interface SingleEventProps {
  params: Promise<{ id: string }>
}

const SingleEventPage: React.FC<SingleEventProps> = async ({ params }) => {
  const id = (await params).id;
  const event = await SERVICES.getEventById(id);
  const rules = (event.rules as any as string).split("|");
  event.rules = rules;
  return <SingleEventClient event={event} />
}

export default SingleEventPage;