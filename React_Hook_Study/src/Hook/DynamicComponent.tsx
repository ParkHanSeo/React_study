import React, { useState, useEffect, Suspense } from 'react';

export const DynamicComponent = ({ studyType }: { studyType: string }) => {
    const [Component, setComponent] = useState<React.ComponentType | null>(null);

    useEffect(() => {
      const loadComponent = async () => {
        try {
          const module = await import(`./${studyType}`);
          setComponent(module.default);
        } catch (e) {
          console.error(e);
        }
      };
  
      loadComponent();
    }, [studyType]);

    console.log("체크");
    console.log(Component);
  
    return Component ? <Component /> : null;
}