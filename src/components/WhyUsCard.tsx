
'use client';

import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { cn } from '@/lib/utils';
import React from 'react';
import { Award, Globe, Heart, Send, Sparkles, Users } from 'lucide-react';
import * as Icons from '@/components/icons';

export type WhyUsItem = {
    iconName: keyof typeof Icons;
    title: string;
    description: string;
};

export const WhyUsCard = ({ iconName, title, description }: WhyUsItem) => {
    const Icon = Icons[iconName];

    return (
        <Card className={cn(
            "bg-background/60 backdrop-blur-sm",
            "h-full rounded-lg shadow-lg border border-transparent",
            "transition-all duration-300 ease-in-out",
            "hover:shadow-2xl hover:border-accent/50 hover:-translate-y-2"
        )}>
            <CardHeader className="p-6">
                <div className="mb-4">
                    {Icon && <Icon className="w-10 h-10 text-accent" />}
                </div>
                <CardTitle className="font-headline text-2xl tracking-wide text-primary">
                    {title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base pt-1">
                    {description}
                </CardDescription>
            </CardHeader>
        </Card>
    );
};
