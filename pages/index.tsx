import Head from "next/head"
import { Container } from "react-bootstrap"
import { TimeInput, TimerBody } from "../components"

export default function Home() {
  return (
    <Container>
      <Head>
        <title>25 + 5 Timer</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
        />
      </Head>

      <header>
        <h1 className="text-center">25 + 5 Clock</h1>
      </header>

      <main>
        <TimeInput />
        <TimerBody />
      </main>
    </Container>
  )
}
