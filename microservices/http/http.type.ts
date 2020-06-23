export interface webServer {
    info: info,
    metadata?: metadata
}

/**
 * Web server properties interfaces
 */

interface info {
    uptime: number,
    status: string
}

interface metadata {
    token: string,
    cors: string
}