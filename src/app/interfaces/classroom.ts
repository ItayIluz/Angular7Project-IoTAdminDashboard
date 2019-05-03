export interface Classroom {
    id: number,
    temperature?: number,
    humidity?: number,
    watt?: number,
    light?: number,
    lastMotionDetected?: Date,
    doorSensors?: Array<{isOpen: boolean}>,
    windowSensors?: Array<{isOpen: boolean}>,
}