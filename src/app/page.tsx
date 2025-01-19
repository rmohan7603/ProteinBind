import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Index from "@/components/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "ProteinBind: A Leading Research Platform for Drug Discovery",
  description: "This is description about ProteinBind project",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Index />
      </DefaultLayout>
    </>
  );
}
