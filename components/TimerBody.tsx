import { Row, Col, Button } from "react-bootstrap"
import { useAtom } from "jotai"
import { useRef, useEffect } from "react"
import {
  isRunningAtom,
  isSessionAtom,
  secondsLeftAtom,
  breakLengthAtom,
  sessionLengthAtom,
} from "../jotai"

export const TimerBody = () => {
  const [breakLength, setBreakLength] = useAtom(breakLengthAtom)
  const [sessionLength, setSessionLength] = useAtom(sessionLengthAtom)
  const [isRunning, setIsRunning] = useAtom(isRunningAtom)
  const [isSession, setIsSession] = useAtom(isSessionAtom)
  const [secondsLeft, setSecondsLeft] = useAtom(secondsLeftAtom)
  const timerRef = useRef(null)

  useEffect(() => {
    setSecondsLeft(sessionLength * 60)
    setIsSession(true)
  }, [])

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(
        () => setSecondsLeft((prev) => (prev >= 0 ? prev - 1 : prev)),
        1000
      )
    }
    return () => clearInterval(timerRef.current)
  }, [isRunning])

  useEffect(() => {
    if (secondsLeft < 0) {
      if (isSession) {
        setSecondsLeft(breakLength * 60)
      } else {
        setSecondsLeft(sessionLength * 60)
      }
      setIsSession((prev) => !prev)
    }
  }, [secondsLeft, breakLength, sessionLength])

  const resetHandler = () => {
    setIsRunning(false)
    setBreakLength(5)
    setSessionLength(25)
    setIsSession(true)
    setSecondsLeft(25 * 60)
  }

  const formatTime = (time: number) => (time < 10 ? `0${time}` : time)

  return (
    <Col>
      <h4 className="text-center" id="timer-label">
        {isSession ? "Session" : "Break"}
      </h4>
      <h3 className="text-center" id="time-left">
        {formatTime(Math.floor(secondsLeft / 60))}:
        {formatTime(secondsLeft % 60)}
      </h3>
      <Row className="d-flex justify-content-center">
        <Button
          variant={isRunning ? "danger" : "success"}
          onClick={() => setIsRunning((prev) => !prev)}
          id="start_stop"
        >
          {isRunning ? "Stop" : "Start"}
        </Button>
        <Button variant="primary" onClick={resetHandler} id="reset">
          Reset
        </Button>
      </Row>
    </Col>
  )
}
