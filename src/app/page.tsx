import { ClientComponent } from "@/components/ClientComponent";
import { ClientComponent2 } from "@/components/ClientComponent2";


export default function Home() {
  return (
    <main>
      {/* 1: The Icon.tsx chunk is optimized */}
      {/* <ClientComponent /> */}
  
      {/*2:  The Icon.tsx chunk is optimized */}
      {/* <ClientComponent2 /> */}

      {/* 3: The Icon.tsx chunk is optimized */}
      {/* <ClientComponent /> */}
      {/* <ClientComponent /> */}

      {/* 4: The Icon.tsx chunk is optimized */}
      {/* <ClientComponent2 /> */}
      {/* <ClientComponent2 /> */}

      {/* 5: The Icon.tsx chunk is not optimized */}
      <ClientComponent />
      <ClientComponent2 />
    </main>
  );
}
