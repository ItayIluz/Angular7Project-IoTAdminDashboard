export interface Classroom {
    id: number,
    number?: number,
    temperature?: number,
    humidity?: number,
    watt?: number,
    light?: number,
    lastMotionDetected?: Date,
    doorSensors?: Array<{status: string}>,
    windowSensors?: Array<{status: string}>,
}