import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
 
export function InputVariants() {
  return (
    <Card color="transparent" shadow={false}>
      <form style={{margin:"0 auto"}}>
        <div className="mb-4 w-96 flex gap-6">
            <Input size="lg" label="Search For Cats" />
            <Button className="w-48">Search </Button>
        </div>
      </form>
    </Card>
  );
}

