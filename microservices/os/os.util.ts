import os from 'os';

export function getProcessUptime(): number {
    return process.uptime();
}

export function getServerUptime(): number {
    return os.uptime();
}