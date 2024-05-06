/* tslint:disable */
/* eslint-disable */
/**
 * Phase Two Admin REST API
 * This is a REST API reference for the Phase Two Keycloak custom resources. These are extensions to the standard [Keycloak Admin REST API](https://www.keycloak.org/docs-api/17.0/rest-api/index.html).  ### Base URI format Paths specified in the documentation are relative to the the base URI. - Format: `https://<host>:<port>/auth/realms` - Example: `https://app.phasetwo.io/auth/realms`  ### Authentication Authentication is achieved by using the `Authentication: Bearer <token>` header in all requests. This is either the access token received from a normal authentication, or by a request directly to the OpenID Connect token endpoint.  It is recommended that you use a Keycloak Admin Client, such as [this one for Javascript](https://github.com/keycloak/keycloak-nodejs-admin-client), as they take care of authentication, getting an access token, and refreshing it when it expires.  #### Client credentials grant example ``` POST /auth/realms/test-realm/protocol/openid-connect/token Host: app.phasetwo.io Accept: application/json Content-type: application/x-www-form-urlencoded  grant_type=client_credentials&client_id=admin-cli&client_secret=fd649804-3a74-4d69-acaa-8f065c6b7da1 ```  #### Password grant example ``` POST /auth/realms/test-realm/protocol/openid-connect/token Host: app.phasetwo.io Accept: application/json Content-type: application/x-www-form-urlencoded  grant_type=password&username=uname@foo.com&password=pwd123AZY&client_id=admin-cli ```  ### SDKs Modern API libraries are available for several common languages. These are available as open source at the links below, or you can choose to generate your own using our [OpenAPI spec file](https://raw.githubusercontent.com/p2-inc/phasetwo-docs/master/openapi.yaml).  | Language | Library | | --- | --- | | Java (and other JVM langs) | https://github.com/p2-inc/phasetwo-java | | JavaScript/TypeScript | https://github.com/p2-inc/phasetwo-js | | Python | https://github.com/p2-inc/phasetwo-python | 
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface InvitationRequestRepresentation
 */
export interface InvitationRequestRepresentation {
    /**
     * 
     * @type {string}
     * @memberof InvitationRequestRepresentation
     */
    email?: string;
    /**
     * 
     * @type {boolean}
     * @memberof InvitationRequestRepresentation
     */
    send?: boolean;
    /**
     * 
     * @type {string}
     * @memberof InvitationRequestRepresentation
     */
    inviterId?: string;
    /**
     * 
     * @type {string}
     * @memberof InvitationRequestRepresentation
     */
    redirectUri?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof InvitationRequestRepresentation
     */
    roles?: Array<string>;
}

/**
 * Check if a given object implements the InvitationRequestRepresentation interface.
 */
export function instanceOfInvitationRequestRepresentation(value: object): boolean {
    return true;
}

export function InvitationRequestRepresentationFromJSON(json: any): InvitationRequestRepresentation {
    return InvitationRequestRepresentationFromJSONTyped(json, false);
}

export function InvitationRequestRepresentationFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvitationRequestRepresentation {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'] == null ? undefined : json['email'],
        'send': json['send'] == null ? undefined : json['send'],
        'inviterId': json['inviterId'] == null ? undefined : json['inviterId'],
        'redirectUri': json['redirectUri'] == null ? undefined : json['redirectUri'],
        'roles': json['roles'] == null ? undefined : json['roles'],
    };
}

export function InvitationRequestRepresentationToJSON(value?: InvitationRequestRepresentation | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'email': value['email'],
        'send': value['send'],
        'inviterId': value['inviterId'],
        'redirectUri': value['redirectUri'],
        'roles': value['roles'],
    };
}
