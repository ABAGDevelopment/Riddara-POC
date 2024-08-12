// components/FullSizeContainer.tsx
import React, { ReactNode } from 'react';
import { Container } from '@nextui-org/react';
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";

interface FullSizeContainerProps {
  children: ReactNode;
}

const FullSizeContainer: React.FC<FullSizeContainerProps> = ({ children }) => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    minHeight: '100vh', 
    minWidth: '100vw',
    margin: 0,
    padding: 0,
  }}>
    <Container
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px', // Adjust as needed
        width: '100%',
        height: '100%',
      }}
    >
      <div className="backgroundCheckMainContainer relative flex flex-col h-screen">
            <Navbar />
            <main className="backgroundCheckYellow container mx-auto flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://www.riddara.com/"
                title="Riddara Global Homepage"
              >
                
                <p className="text-primary">&copy;2024 Riddara. All Rights Reserved.</p>
              </Link>
            </footer>
          </div>
    </Container>
  </div>
);

export default FullSizeContainer;
