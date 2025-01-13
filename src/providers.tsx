import React, { PropsWithChildren } from "react";
import { BackgroundProvider } from "@/contexts/backgroundContext";

export const Providers = ({ children }: PropsWithChildren) => <BackgroundProvider>
    {children}
</BackgroundProvider>