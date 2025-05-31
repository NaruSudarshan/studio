import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, ListChecks } from "lucide-react";
import { PresenceAvatars } from "@/components/collaboration/presence-avatars";
import Image from "next/image";

export default function TaskBoardsPage() {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="font-headline text-3xl">Task Boards</CardTitle>
            <PresenceAvatars />
          </div>
          <CardDescription>Organize projects and track progress with intuitive task boards.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> New Task Board
          </Button>
          <p className="text-muted-foreground">
            Visualize your workflows with customizable Kanban-style boards. Create tasks, assign them to team members, set deadlines, and monitor progress in real-time.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        {[{ title: "Project Alpha", tasks: 12, completed: 5, hint: "project plan timeline" }, { title: "Marketing Campaign Q4", tasks: 25, completed: 10, hint: "marketing strategy chart" }].map((board, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="font-headline">{board.title}</CardTitle>
                <ListChecks className="h-5 w-5 text-muted-foreground" />
              </div>
              <CardDescription>{board.completed} of {board.tasks} tasks completed</CardDescription>
            </CardHeader>
            <CardContent>
              <Image 
                src={`https://placehold.co/600x300.png`} 
                alt={`Placeholder for task board ${board.title}`} 
                data-ai-hint={board.hint}
                width={600} 
                height={300}
                className="rounded-md object-cover w-full mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Visual representation of the task board with columns like "To Do", "In Progress", "Done".
              </p>
              <Button variant="outline" className="mt-4 w-full">Open Board</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
