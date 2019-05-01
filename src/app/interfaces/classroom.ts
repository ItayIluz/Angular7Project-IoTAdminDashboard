export interface Classroom {
    id: number,
    temperature: number,
    humidity: number,
    watt: number,
    lightIsOn: boolean,
    lastMotionDetected: Date,
    doorSensors: Array<{isOpen: boolean}>,
    windowSensors: Array<{isOpen: boolean}>,
}