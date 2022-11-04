export class TaskData {
    jobname: string
    args: any
    sentAt: Date

    constructor(jobname, args) {
        this.jobname = jobname
        this.args = args;
        this.sentAt = new Date();
    }
}