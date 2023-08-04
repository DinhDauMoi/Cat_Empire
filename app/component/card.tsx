import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

export function ProfileCard() {
  return (
    <Card className="relative group">
      <CardHeader floated={false} className="h-50">
        <img src="/meolol.png" alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Cat
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
          Cat and Cat
        </Typography>
      </CardBody>
    </Card>
  );
}