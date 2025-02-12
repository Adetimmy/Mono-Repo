"use client";
import { DataFetcher } from "@/components/misc/dataFetcher";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { User2Icon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [photos, setPhotos] = useState(1);
  return (
    <DataFetcher url="/posts">
      {(data) => {
        return (
          <ResizablePanelGroup
            direction="horizontal"
            className="max-w-md rounded-lg border md:min-w-7xl m-auto mt-5 h-[1600px]"
          >
            <ResizablePanel defaultSize={50} className="h-80">
              <ScrollArea className="h-full">
                <div className="flex h-auto flex-col  py-6">
                  {data.map((item: any) => (
                    <div
                      key={item.id}
                      className={cn(
                        "hover:bg-red-500 p-2 line-clamp-1 cursor-pointer",
                        item.id === photos ? "bg-amber-700" : ""
                      )}
                      onClick={() => setPhotos(item.id)}
                    >
                      <span className="font-semibold">{item.title}</span>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={25}>
                  <ScrollArea className="h-full">
                    <DataFetcher url={`/photos/${photos}`}>
                      {(data) => {
                        console.log(data);
                        return (
                          <Image
                            src={data.url}
                            loader={() => {
                              return data.thumbnailUrl;
                            }}
                            alt={data.title}
                            width={500}
                            height={500}
                          />
                        );
                      }}
                    </DataFetcher>
                  </ScrollArea>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={75}>
                  <ScrollArea className="h-full px-4">
                    <DataFetcher url={`/comments?postId=${photos}`}>
                      {(data) => {
                        console.log(data);
                        return (
                          <>
                            {data.map((item:{
                              name:string,
                              email:string,
                              body:string
                            }, index:number) => {
                              return (
                                <Card className={cn('drop-shadow-sm',  index===0 && index === data.length - 1 ? '':'my-5')}>
                                  <CardHeader className="flex flex-row items-start gap-3">
                                    <Avatar className="size-12">
                                      <AvatarFallback>
                                        <User2Icon />
                                      </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                      <CardTitle>{`${item.name?.at(0)?.toUpperCase() ?? ''}${item.name?.substring(1) ?? ''}`}</CardTitle>
                                      <CardDescription>
                                        {item.email}
                                      </CardDescription>
                                    </div>
                                  </CardHeader>
                                  <CardContent>
                                    <p className="select-none">{item.body}</p>
                                  </CardContent>
                                </Card>
                              );
                            })}
                          </>
                        );
                      }}
                    </DataFetcher>
                  </ScrollArea>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        );
      }}
    </DataFetcher>
  );
}
