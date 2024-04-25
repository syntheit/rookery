import { Card, CardBody, CardHeader, User } from "@nextui-org/react";

export type Event = {
  id: string;
  name: string;
  description: string;
  start_time: Date;
  end_time: Date;
  location: string;
  variant: EventVariant;
};

export type EventVariant =
  | "tournament"
  | "casual"
  | "lesson"
  | "scrimmage"
  | "meeting"
  | "other";

export default function Event({ event }: { event: Event }) {
  return (
    <Card>
      <CardHeader>
        <h1>{event.name}</h1>
        <h3>{event.description}</h3>
      </CardHeader>
      <CardBody>
        <h3>{event.start_time.toDateString()}</h3>
        <h3>
          {event.start_time.toTimeString()} - {event.end_time.toTimeString()}
        </h3>
        {/* use the variant to determine the icon */}
        <h3>{event.location}</h3>
      </CardBody>
    </Card>
  );
}
