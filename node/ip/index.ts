import * as os from 'os';

export function getIpAddress() {
    const interfaces = os.networkInterfaces();
    const en0 = interfaces.en0;
    const ipInfo = en0.filter(item => item.family === 'IPv4').pop();
    console.log(interfaces, ipInfo.address);
}
