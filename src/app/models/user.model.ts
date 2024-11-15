export class User {
    userName: string;
    userEmail: string;
    userPassword: string;
    userLicenseNumber: string;
    proofId: string;

    constructor(userName: string, userEmail: string, userPassword: string,userLicenseNumber:string, proofId: string) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.userLicenseNumber = userLicenseNumber;
        this.proofId = proofId;
    }
}