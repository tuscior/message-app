export interface statusControllerInterface {
    status: () => string,
    version: () => string
}
export interface createStatusControllerInterface {
    (): statusControllerInterface
}