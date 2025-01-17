/*
 * eu-digital-green-certificates/ dgca-issuance-web
 *
 * (C) 2021, T-Systems International GmbH
 *
 * Deutsche Telekom AG and all other contributors /
 * copyright owners license this file to you under the Apache
 * License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


export enum TestResult {
    NEGATIVE = 6,
    POSITIVE = 7,
    INVALID = 8,
}

export enum Sex {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    OTHER = "OTHER",
    UNKNOWN = "UNKNOWN"
}

export enum IdentifierType {
    // Passport Number
    PPN = "PPN",
    // National Person Identifier
    NN = "NN",
    // Citizenship Card Number
    CZ = "CZ", 
    // Health Card number
    HC = "HC",
    // National Unique Individual Identifier
    NI = "NI",
    // Member Number
    MB = "MB",
    // National Health Plan Identifier
    NH = "NH"
}
