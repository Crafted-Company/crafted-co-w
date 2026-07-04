import * as React from "react";
import { Container } from "@/components/ui/container";
import { Loader } from "@/components/ui/loader";

export default function Loading() {
  return (
    <div className="py-24 flex-grow flex items-center justify-center">
      <Container className="flex flex-col items-center justify-center">
        <Loader />
      </Container>
    </div>
  );
}
