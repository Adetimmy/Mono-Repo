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
import { capitalizeFirstLetter, cn } from "@/lib/utils";
import { User2Icon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [id, setId] = useState(1);
  return (
    <DataFetcher url="/posts">
      {(data) => {
        return (
          <ResizablePanelGroup
            direction="horizontal"

            className="max-w-md rounded-lg border md:min-w-7xl m-auto mt-5 min-h-auto"
          >
            <ResizablePanel defaultSize={50} className="h-[650px]">
              <ScrollArea className="h-full">
                <div className="flex h-auto flex-col  py-6">
                  {data?.map((item: any) => (
                    <div
                      key={item.id}
                      className={cn(
                        " p-2 line-clamp-1 cursor-pointer",
                        item.id === id ? "bg-amber-700" : "hover:bg-red-500"
                      )}
                      onClick={() => setId(item.id)}
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
                  <ScrollArea className="">
                    <DataFetcher url={`/photos/${id}`}>
                      {(data) => {
                        return (
                          <Image
                            src={data?.url}
                            loader={() => {
                              return data?.thumbnailUrl;
                            }}
                            alt={data?.title}
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
                    <DataFetcher url={`/comments?postId=${id}`}>
                      {(data) => {
                
                        return (
                          <>
                            {data?.map((item:{
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
                                      <CardTitle>{capitalizeFirstLetter(item.name)}</CardTitle>
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
