'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Briefcase, GraduationCap } from 'lucide-react';
import { TimelineEntry, TimelineType } from '@/types/timelineTypes';
import BlurFade from './ui/blur-fade';

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="py-12 px-4">
      <div className="text-center font-bold text-lg pb-14">
        MY EXPERIENCE & EDUCATION
      </div>
      <div className="relative max-w-4xl mx-auto p-4">
        <Separator
          orientation="vertical"
          className="absolute left-1/2 h-full transform -translate-x-1/2"
        />

        {entries.map((entry, index) => (
          <BlurFade key={index} delay={0.25 + index * 0.05} inView>
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } gap-8 mb-8`}
            >
              <div className="flex-1 md:w-1/2"></div>
              <div className="flex items-center justify-center">
                <Badge
                  variant="outline"
                  className="w-fit h-fit p-3 rounded-full z-10 bg-background"
                >
                  {entry.type === TimelineType.WORK ? (
                    <Briefcase className="h-6 w-6" />
                  ) : (
                    <GraduationCap className="h-6 w-6" />
                  )}
                </Badge>
              </div>
              <Card className="flex-1 md:w-1/2 z-10">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {entry.organization}
                  </CardTitle>
                  <p className="italic">{entry.title}</p>
                  <p className="text-sm text-muted-foreground">{entry.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{entry.description}</p>
                </CardContent>
              </Card>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
