import { useAtom } from "jotai"
import {
  breakLengthAtom,
  isSessionAtom,
  secondsLeftAtom,
  sessionLengthAtom,
  isRunningAtom,
} from "../jotai"
import { Row, Col, Button } from "react-bootstrap"
import { useJotaiDevtools } from "@c0d3t3k/jotai-devtools"

export const TimeInput = () => {
  const [breakLength, setBreakLength] = useAtom(breakLengthAtom)
  const [sessionLength, setSessionLength] = useAtom(sessionLengthAtom)
  const [secondsLeft, setSecondsLeft] = useAtom(secondsLeftAtom)
  const [isSession] = useAtom(isSessionAtom)
  const [isRunning] = useAtom(isRunningAtom)

  return (
    <Row>
      <div className="d-flex align-items-center flex-column col-sm-6">
        <h4 id="break-label">Break Length</h4>
        <h3 id="break-length">{breakLength}</h3>
        <Row className="d-flex justify-content-space-between">
          <Button
            variant="success"
            onClick={() => {
              setBreakLength((prev) => (prev + 1 <= 60 ? prev + 1 : prev))
              if (
                !isRunning &&
                !isSession &&
                breakLength * 60 === secondsLeft
              ) {
                setSecondsLeft((prev) => (prev + 60 <= 3600 ? prev + 60 : prev))
                console.log("...changing")
              }
            }}
            id="break-increment"
          >
            {" "}
            +{" "}
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setBreakLength((prev) => (prev - 1 > 0 ? prev - 1 : prev))
              if (
                !isRunning &&
                !isSession &&
                breakLength * 60 === secondsLeft
              ) {
                setSecondsLeft((prev) => (prev - 60 > 0 ? prev - 60 : prev))
              }
            }}
            id="break-decrement"
          >
            {" "}
            -{" "}
          </Button>
        </Row>
      </div>

      <div className="d-flex align-items-center flex-column col-sm-6">
        <h4 id="session-label">Session Length</h4>
        <h3 id="session-length">{sessionLength}</h3>
        <Row className="d-flex justify-content-space-between">
          <Button
            variant="success"
            onClick={() => {
              setSessionLength((prev) => (prev + 1 <= 60 ? prev + 1 : prev))
              if (
                !isRunning &&
                isSession &&
                sessionLength * 60 === secondsLeft
              ) {
                setSecondsLeft((prev) => (prev + 60 <= 3600 ? prev + 60 : prev))
              }
            }}
            id="session-increment"
          >
            {" "}
            +{" "}
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setSessionLength((prev) => (prev - 1 > 0 ? prev - 1 : prev))
              if (
                !isRunning &&
                isSession &&
                sessionLength * 60 === secondsLeft
              ) {
                setSecondsLeft((prev) => (prev - 60 > 0 ? prev - 60 : prev))
              }
            }}
            id="session-decrement"
          >
            {" "}
            -{" "}
          </Button>
        </Row>
      </div>
    </Row>
  )
}
