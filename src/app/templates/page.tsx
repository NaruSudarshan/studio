import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, BarChart3, Presentation, Copy } from "lucide-react";
import Image from "next/image";

const templates = [
  {
    title: "Meeting Agenda",
    description: "Structure your meetings for maximum productivity.",
    icon: FileText,
    imageHint: "meeting notes"
  },
  {
    title: "Marketing Plan",
    description: "Outline your marketing strategies and campaigns.",
    icon: BarChart3,
    imageHint: "marketing chart"
  },
  {
    title: "Project Proposal",
    description: "Craft compelling project proposals to win stakeholders.",
    icon: Presentation,
    imageHint: "business proposal"
  },
  {
    title: "Content Calendar",
    description: "Plan and schedule your content effectively.",
    icon: FileText, // Placeholder, consider CalendarDays if available & fitting
    imageHint: "calendar schedule"
  },
];

export default function TemplatesPage() {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Project Templates</CardTitle>
          <CardDescription>Kickstart your work with pre-designed templates for various needs.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Browse through our collection of customizable templates. Select one to get started quickly or customize it to fit your specific project requirements.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {templates.map((template, index) => (
          <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <template.icon className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-xl">{template.title}</CardTitle>
              </div>
               <CardDescription>{template.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <Image 
                src={`https://placehold.co/400x250.png`} 
                alt={`${template.title} template placeholder`} 
                data-ai-hint={template.imageHint}
                width={400} 
                height={250}
                className="rounded-md object-cover w-full mb-4"
              />
              <Button variant="outline" className="w-full mt-auto">
                <Copy className="mr-2 h-4 w-4" /> Use Template
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
