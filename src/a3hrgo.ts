import { Credentials, Options } from './types';
import Report from './report';

export class A3hrgo {

    private credentials: Credentials;
    private options: Options = { showInterface: false };
    
    public constructor(
        credentials: Credentials,
        options?: Options
    ) {
        this.credentials = credentials;
        this.options = { ...this.options, ...options };
    }

    /**
     * Method to execute a report
     * @throws error when credentials are invalid or something goes wrong
     */
    public async report(): Promise<void> {
        await Report(this.credentials, this.options);
    }
}