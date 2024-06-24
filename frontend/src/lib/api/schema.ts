/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/courses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["course.getAllCourses"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/courses/{course}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["course.getCourse"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/courses/{course}/professors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["course.getCourseProfessors"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/courses/{course}/survey": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["course.getCourseSurvey"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/professors": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["professor.getAllProfessors"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/professors/{professor}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["professor.getProfessor"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/professors/{professor}/courses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["professor.getProfessorCourses"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/professors/{professor}/survey": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["professor.getProfessorSurvey"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["search.search"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subjects": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["subject.getAllSubjects"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subjects/{subject}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["subject.getSubject"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/subjects/{subject}/courses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["subject.getSubjectCourses"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** CourseResource */
        CourseResource: {
            code: string;
            title: string;
            description: string;
            requirements: string | null;
            units: number | null;
            languages: string[];
            components: string[];
            englishEquivalent: string | null;
            frenchEquivalent: string | null;
            previousTermIds: number[];
            grades: components["schemas"]["GradesResource"];
            subject: components["schemas"]["SubjectResource"];
        };
        /** CourseSearchRecourse */
        CourseSearchRecourse: {
            code: string;
            title: string;
        };
        /** CourseSectionResource */
        CourseSectionResource: {
            term: string;
            section: string;
            grades: components["schemas"]["GradesResource"];
        };
        /** CourseWithSectionsResource */
        CourseWithSectionsResource: {
            code: string;
            title: string;
            description: string;
            requirements: string | null;
            units: number | null;
            languages: string[];
            components: string[];
            grades: components["schemas"]["GradesResource"];
            sections: components["schemas"]["CourseSectionResource"][];
        };
        /** GradesResource */
        GradesResource: {
            total: number;
            mean: number | null;
            /** @enum {string|null} */
            median: "A+" | "A" | "A-" | "B+" | "B" | "C+" | "C" | "D+" | "D" | "E" | "F" | "EIN" | "NS" | "NC" | "ABS" | "P" | "S" | null;
            /** @enum {string|null} */
            mode: "A+" | "A" | "A-" | "B+" | "B" | "C+" | "C" | "D+" | "D" | "E" | "F" | "EIN" | "NS" | "NC" | "ABS" | "P" | "S" | null;
            distribution: {
                "A+": number;
                A: number;
                "A-": number;
                "B+": number;
                B: number;
                "C+": number;
                C: number;
                "D+": number;
                D: number;
                E: number;
                F: number;
                EIN: number;
                NS: number;
                NC: number;
                ABS: number;
                P: number;
                S: number;
            };
        };
        /** ProfessorResource */
        ProfessorResource: {
            id: number;
            publicId: number;
            name: string;
            grades: components["schemas"]["GradesResource"];
            rmpReview: components["schemas"]["RateMyProfessorReviewResource"];
        };
        /** ProfessorSearchRecourse */
        ProfessorSearchRecourse: {
            id: number;
            publicId: number;
            name: string;
        };
        /** ProfessorWithSectionsResource */
        ProfessorWithSectionsResource: {
            id: number;
            publicId: number;
            name: string;
            grades: components["schemas"]["GradesResource"];
            sections: components["schemas"]["CourseSectionResource"][];
        };
        /** RateMyProfessorReviewResource */
        RateMyProfessorReviewResource: {
            link: string;
            rating: number;
            difficulty: number;
            numRatings: number;
            department: string | null;
        };
        /** SubjectResource */
        SubjectResource: {
            code: string;
            subject: string;
            faculty: string;
        };
        /** SubjectSearchRecourse */
        SubjectSearchRecourse: {
            code: string;
            subject: string;
        };
        /** SubjectWithGradesResource */
        SubjectWithGradesResource: {
            code: string;
            subject: string;
            faculty: string;
            coursesCount: number;
            grades: components["schemas"]["GradesResource"];
        };
        /** SurveyQuestionResource */
        SurveyQuestionResource: {
            question: string;
            score: number | null;
            totalResponses: number;
            responses: components["schemas"]["SurveyResponseResource"][];
        };
        /** SurveyResponseResource */
        SurveyResponseResource: {
            response: string;
            numResponses: number;
        };
    };
    responses: {
        /** @description Not found */
        ModelNotFoundException: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @description Error overview. */
                    message: string;
                };
            };
        };
        /** @description Validation error */
        ValidationException: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": {
                    /** @description Errors overview. */
                    message: string;
                    /** @description A detailed description of each field that failed validation. */
                    errors: {
                        [key: string]: string[] | undefined;
                    };
                };
            };
        };
    };
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    "course.getAllCourses": {
        parameters: {
            query?: never;
            header?: {
                "Accept-Language"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                };
            };
        };
    };
    "course.getCourse": {
        parameters: {
            query?: never;
            header?: {
                "Accept-Language"?: string;
            };
            path: {
                /** @description The course code */
                course: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `CourseResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CourseResource"];
                };
            };
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "course.getCourseProfessors": {
        parameters: {
            query?: never;
            header?: {
                "Accept-Language"?: string;
            };
            path: {
                /** @description The course code */
                course: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of `ProfessorWithSectionsResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProfessorWithSectionsResource"][];
                };
            };
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "course.getCourseSurvey": {
        parameters: {
            query?: never;
            header?: {
                "Accept-Language"?: string;
            };
            path: {
                /** @description The course code */
                course: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of `SurveyQuestionResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SurveyQuestionResource"][];
                };
            };
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "professor.getAllProfessors": {
        parameters: {
            query?: never;
            header?: {
                "Accept-Language"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": number[];
                };
            };
        };
    };
    "professor.getProfessor": {
        parameters: {
            query?: never;
            header?: {
                "Accept-Language"?: string;
            };
            path: {
                /** @description The professor public id */
                professor: number | null;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `ProfessorResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProfessorResource"];
                };
            };
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "professor.getProfessorCourses": {
        parameters: {
            query?: never;
            header?: {
                "Accept-Language"?: string;
            };
            path: {
                /** @description The professor public id */
                professor: number | null;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of `CourseWithSectionsResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CourseWithSectionsResource"][];
                };
            };
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "professor.getProfessorSurvey": {
        parameters: {
            query?: never;
            header?: {
                "Accept-Language"?: string;
            };
            path: {
                /** @description The professor public id */
                professor: number | null;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of `SurveyQuestionResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SurveyQuestionResource"][];
                };
            };
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "search.search": {
        parameters: {
            query?: never;
            header?: {
                "Accept-Language"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    q: string;
                };
            };
        };
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        courses: components["schemas"]["CourseSearchRecourse"][];
                        professors: components["schemas"]["ProfessorSearchRecourse"][];
                        subjects: components["schemas"]["SubjectSearchRecourse"][];
                    };
                };
            };
            422: components["responses"]["ValidationException"];
        };
    };
    "subject.getAllSubjects": {
        parameters: {
            query?: never;
            header?: {
                "Accept-Language"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                };
            };
        };
    };
    "subject.getSubject": {
        parameters: {
            query?: never;
            header?: {
                "Accept-Language"?: string;
            };
            path: {
                /** @description The subject code */
                subject: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description `SubjectWithGradesResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SubjectWithGradesResource"];
                };
            };
            404: components["responses"]["ModelNotFoundException"];
        };
    };
    "subject.getSubjectCourses": {
        parameters: {
            query?: never;
            header?: {
                "Accept-Language"?: string;
            };
            path: {
                /** @description The subject code */
                subject: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Array of `CourseResource` */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CourseResource"][];
                };
            };
            404: components["responses"]["ModelNotFoundException"];
        };
    };
}