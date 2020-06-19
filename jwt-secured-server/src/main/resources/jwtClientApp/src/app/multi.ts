
export interface Token {
    error?: string,
    token?: string
}

export interface User {
    id?:number
    username: string,
    firstname: string,
    lastname: string
}

export interface Error {
    error?: string;
    error_description?: string;
}

export interface ServerError {
    error: Error,
    headers?: Object,
    message: string,
    name: string,
    ok: boolean,
    status: number,
    statusText?: string
}

export interface BodyReq {
    username: string,
    password: string,
    grant_type: string,
    client_id: string
}

export interface AuthToken {
    access_token?: string,
    token_type?: string,
    refresh_token?: string,
    expires_in?: number,
    scope?: string,
    userId?: number,
    jti?: string
}

export interface MsgResponse {
    status?: number;
    response: string
}