import { webServer } from "./http.type";
import { getProcessUptime } from "../os/os.util";

export function getWebServer(): webServer {
    const processUptime: number = getProcessUptime();

    return {
        info: {
            status: 'Up and running ...',
            uptime: processUptime
        }
    }
}

