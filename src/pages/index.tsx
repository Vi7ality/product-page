import { Container, Section } from "@radix-ui/themes";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Section>
          <Container>
            <div></div>
            <div></div>
          </Container>
        </Section>
      </main>
    </>
  );
}
